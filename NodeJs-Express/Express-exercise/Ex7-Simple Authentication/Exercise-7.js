// @docs 🧩 Exercise 7: Simple Authentication (No DB)

// Goal: Simulate login logic without a database.
// Requirements:

// Create a route POST /login that checks if:

// { "username": "admin", "password": "1234" }

// If correct → return {"message": "Login successful"}

// If incorrect → return {"message": "Invalid credentials"} with status 401.

// ✅ Bonus: Store valid users in an array and check dynamically.

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

let data = [];

app.post("/auth/register", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = data.find((user) => user.userName === userName);
    if (existingUser) {
      return res.status(400).json({ msg: "Invalid userName or password!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    data.push({ userName, password: hashedPassword });
    res.status(201).json({ msg: "Registered user successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/auth/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = data.find((user) => user.userName === userName);
    if (!existingUser) {
      res.status(404).json({ msg: "Invalid uerName or password!" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
      res.status(200).json({ msg: "Login successfully!" });
    } else {
      res.status(401).json({ msg: "Invalid userName or password!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 4000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port}`);
});
