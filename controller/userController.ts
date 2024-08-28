import { NextFunction, Request, Response } from "express";

import catchAsyncError from "../middleware/catchAsyncError";
import User from "../model/userSchema";

export const userRegistrationController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = { ...req.body };

    const user = await User.create(payload);

    res.status(200).json({
      success: true,
      message: "User Register successfully",
      user,
    });
  }
);
