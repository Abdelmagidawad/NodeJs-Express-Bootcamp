// @docs 🧩 Exercise 6: Express Router (Modular Routing)

// Goal: Organize routes into separate files.
// Requirements:

// Create a folder /routes

// users.js → handles /users

// products.js → handles /products

// Each should have basic CRUD endpoints (GET, POST, PUT, DELETE).

// Import and use them in app.js like:

// app.use('/users', userRoutes);
// app.use('/products', productRoutes);

// ✅ Bonus: Use middleware inside the router file to log only for that router.

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.js";
import productsRouter from "./routes/products.js";
import logger from "./middlewares/logger.js";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/users", usersRouter);

app.use("/api/products", productsRouter);

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Server Is running ${environment} on port ${port}!`);
});
