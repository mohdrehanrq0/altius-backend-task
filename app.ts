import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import fs from "fs";
import morgan from "morgan";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware";
import router from "./router";

const app = express();
app.use(cookieParser());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/v1", router);

//checking for a upload folder
if (!fs.existsSync("./public/uploads")) {
  fs.mkdirSync("./public/uploads", { recursive: true });
}
app.use(errorHandlerMiddleware);

export default app;
