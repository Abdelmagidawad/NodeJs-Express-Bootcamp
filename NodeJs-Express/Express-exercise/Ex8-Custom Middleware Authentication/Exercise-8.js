// @docs 🧩 Exercise 8: Custom Middleware Authentication

// Goal: Protect certain routes.
// Requirements:

// Create a middleware checkAuth that checks if req.headers.token === "secret".

// Apply it to a protected route /dashboard that returns "Welcome to dashboard!" only if authorized.

// ✅ Bonus: Create a global app.use() that logs unauthorized attempts.

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { checkAuth } from "./middlewares/checkAuth.js";

const app = express();

app.use(checkAuth);

app.get("/dashboard", (req, res) => {
  res.status(200).json({ msg: "Welcome to dashboard!" });
});

const port = process.env.PORT;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port} `);
});
