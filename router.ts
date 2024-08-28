import Router from "express";

import userRouter from "./route/userRoute";

const router = Router();

router.get("/", (_, res) =>
  res.status(200).json({
    success: true,
    status: 200,
    data: "App in up and running!!!!",
  })
);

router.use("/user", userRouter);

export default router;
