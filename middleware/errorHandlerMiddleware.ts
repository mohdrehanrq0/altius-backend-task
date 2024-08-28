import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import ErrorHandler from "../utils/errorHandler";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  //wrong mongo id errror
  if (err.name == "CastError") {
    const message = "Resource not found. Invalid: " + err.path;
    err = new ErrorHandler(message, 404);
  }

  //Duplicate Error
  if (err.code == 11000) {
    console.log("err", err);
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 500);
  }

  //wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `JWT token is invalid. try again`;
    err = new ErrorHandler(message, 401);
  }

  //jwt expire error
  if (err.name === "TokenExpiredError") {
    const message = `JWT token is expired. try again`;
    err = new ErrorHandler(message, 401);
  }

  // console.log("Testing Error", err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || err,
    stack_trace: err.stack,
  });
};
