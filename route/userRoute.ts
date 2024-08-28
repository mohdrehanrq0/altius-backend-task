import Router from "express";

import { userRegistrationContract } from "../contract/user";
import { userRegistrationController } from "../controller/userController";
import validator, { ValidationSource } from "../middleware/validator";

const userRouter = Router();

userRouter.post(
  "/register",
  validator(ValidationSource.BODY, userRegistrationContract),
  userRegistrationController
);

export default userRouter;
