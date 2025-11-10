// Express => ### Simple API Project ###

import express from "express";
import coursesRouter from "./routes/courses.js";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;
const nodeEnv = process.env.NODE_ENV;

app.use("/api/courses", coursesRouter);

app.listen(port, () => {
  console.log(`Server is running ${nodeEnv} on port ${port}`);
});
