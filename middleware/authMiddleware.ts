import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

import User from "../model/userSchema";
import { ProtectedRequest } from "../type/app-request";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "./catchAsyncError";

export const isAuthenticatedUser = async (
  req: ProtectedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return next(new ErrorHandler("Please login to access this page", 401));
  }

  const decodeData = jwt.verify(token, String(process.env.JWT_SECRET));
  // @ts-expect-error
  req.user = await User.findById(decodeData._id);

  next();
};
