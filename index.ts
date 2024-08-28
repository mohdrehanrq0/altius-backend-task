import express from "express";

import app from "./app";
import connectToDB from "./database/mongoose";

connectToDB();

app.listen(process.env.PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
