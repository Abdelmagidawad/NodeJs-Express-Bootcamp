// @docs 🧩 Exercise 9: File Serving

// Goal: Serve static files.
// Requirements:

// Create a /public folder with an index.html file.

// Serve it using:

// app.use(express.static('public'));

// ✅ Bonus: Add a /download route that sends a file with res.download().

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";

const app = express();
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).send("test");
});
app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port}!`);
});
