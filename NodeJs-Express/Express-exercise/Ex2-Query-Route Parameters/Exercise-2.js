// @docs 🧩 Exercise 2: Query & Route Parameters

// Goal: Understand how to use params and query strings.
// Requirements:

// Add a route /users/:username

// It should respond with "Hello, <username>!".

// Add a route /search

// Example: /search?name=Ali&age=20

// Respond with "Searching for Ali, age 20"

// ✅ Bonus: Return a JSON object instead of a string.

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/users/:username", (req, res) => {
  const userName = req.params.username;
  res.status(200).json({ msg: `Hello, ${userName}!` });
});

app.get("/search", (req, res) => {
  const { name, age } = req.query;
  res.status(200).json({ msg: `Searching for ${name} , age ${age}` });
});

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port} `);
});
