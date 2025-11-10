import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

const app = express();

const port = process.env.PORT || 8000;
const nodeEnv = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Server is running ${nodeEnv} on port ${port}`);
});
