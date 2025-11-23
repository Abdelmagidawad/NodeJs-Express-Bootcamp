// Routes => End Points

import express from "express";
import { validationSchema } from "../middlewares/productValidationSchema.js";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getAllProducts).post(validationSchema(), createProduct);
router
  .route("/:productId")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
