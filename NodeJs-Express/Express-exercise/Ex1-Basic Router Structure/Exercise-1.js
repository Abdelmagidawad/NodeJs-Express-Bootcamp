//  @docs 🧩 Exercise 1: Basic Router Structure

// Goal: Practice Express routes and responses.
// Requirements:

// Create an Express server.

// Add routes:

// GET / → respond with "Welcome to my Express app!"

// GET /about → respond with your name and a short description.

// GET /contact → respond with a JSON: { email: "you@example.com", phone: "0123456789" }.

// ✅ Bonus: Add a custom 404 route if a page isn’t found.

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Express app!");
});
app.get("/about", (req, res) => {
  res.status(200).send("Welcome to Migo on About Page");
});
app.get("/contact", (req, res) => {
  res.status(200).json({ email: "you@example.com", phone: "0123456789" });
});
app.use((req, res) => {
  res.status(404).json({ msg: "Page not found!" });
});

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port} `);
});
