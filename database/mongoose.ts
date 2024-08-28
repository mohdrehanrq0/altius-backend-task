import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: `.env` });

const connectToDB = () =>
  mongoose
    .connect("mongodb://localhost:27017/altius-task", {})
    .then(() => console.log("connected to mongodb"))
    .catch(console.error);

export default connectToDB;
