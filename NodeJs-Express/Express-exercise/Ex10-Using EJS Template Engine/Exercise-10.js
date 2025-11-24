// @docs 🧩 Exercise 10 Using EJS Template Engine

// 🎯 Goal

// Learn how to:

// - Set EJS as the template engine
// - Render HTML pages
// - Pass data to EJS
// - Use reusable partials
// - Build a small dynamic website

// Requirements:

// 1- Install EJS:
// npm install ejs

// 2- Set Express to use EJS.

// 3- Create 2 pages:
// / → home page
// /users → show a list of users from an array

// 4- Use header and footer partials on every page.

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", (req, res) => {
  res.render("users", {
    users: [
      { id: 1, userName: "Ali", age: 15 },
      { id: 2, userName: "Omar", age: 25 },
      { id: 1, userName: "Ahmed", age: 29 },
    ],
  });
});

const port = process.env.port;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port}`);
});
