// @docs 🧩 Exercise 3: Middleware Practice

// Goal: Learn to use and create middleware.
// Requirements:

// Create middleware that logs:

// [TIME] Method: GET Path: /users

// Apply it globally using app.use().

// Add another middleware for a specific route that adds a property to req, e.g. req.user = "admin", and display it in the response.

// ✅ Bonus: Separate middlewares into a middleware/logger.js file and import it.

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import logger from "./middleware/logger.js";

const app = express();

app.use(logger);

app.use("/dashboard", (req, res) => {
  req.user = "Admin";
  res.status(200).send(`Dashboard accessed by: ${req.user}`);
});

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port} `);
});
