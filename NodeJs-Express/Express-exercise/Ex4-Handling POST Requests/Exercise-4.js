// @docs 🧩 Exercise 4: Handling POST Requests

// Goal: Learn how to handle form data and JSON body.
// Requirements:

// Use express.json() and express.urlencoded() middleware.

// Create a POST /feedback route:

// Receive { name, message }

// Respond with "Thanks <name>! Your message: '<message>' has been received."

// ✅ Bonus: Validate that both fields are present; otherwise return a 400 error.

import express from "express";
import { body, validationResult } from "express-validator";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.post(
  "/feedback",
  [
    body("name").notEmpty().withMessage("Name is required!"),
    body("message").notEmpty().withMessage("message is required!"),
  ],
  (req, res) => {
    const { name, message } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.status(200).json({
      message: `Thanks ${name} Your message: ${message} has been received.`,
    });
  }
);

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port}`);
});
