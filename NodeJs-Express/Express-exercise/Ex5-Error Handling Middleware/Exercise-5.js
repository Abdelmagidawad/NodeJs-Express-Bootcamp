// @docs 🧩 Exercise 5: Error Handling Middleware

// Goal: Build custom error handling.
// Requirements:

// Create an intentional error route /error-test that throws an error.

// Add a custom error-handling middleware:

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

// ✅ Bonus: Add status and message properties for different error types.

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import errorHandler from "./middlewares/error.js";

const app = express();

let products = [
  {
    id: 1,
    productName: "LabTop",
    price: 15000,
  },
  {
    id: 2,
    productName: "Keyboard",
    price: 1000,
  },
];

app.get("/api/products", (req, res, next) => {
  if (products.length === 0) {
    const error = new Error("Products Not Found!");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const existProduct = products.find((product) => product.id === id);
  if (!existProduct) {
    const error = new Error(`Product with id ${id} Not Found!`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(existProduct);
});

app.get("/error-test", (req, res, next) => {
  const error = new Error("Intentional error!");
  error.status = 400;
  error.message = "Something went wrong!";
  next(error);
});

app.use(errorHandler);

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running ${environment} on port ${port}`);
});
