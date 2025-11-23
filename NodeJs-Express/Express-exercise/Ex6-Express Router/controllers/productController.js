// Logic

import products from "../models/productModel.js";
import { validationResult } from "express-validator";

const getAllProducts = (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({ msg: "Products Not Found!" });
  }
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  const productId = parseInt(req.params.productId);
  const exitProduct = products.find((product) => product.id === productId);
  if (!exitProduct) {
    return res
      .status(404)
      .json({ msg: `Product with id ${productId} Not Found!` });
  }
  res.status(200).json(exitProduct);
};

const createProduct = (req, res) => {
  const product = { id: products.length + 1, ...req.body };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  products.push(product);
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const productId = parseInt(req.params.productId);
  const exitProduct = products.find((product) => product.id === productId);

  if (!exitProduct) {
    return res
      .status(404)
      .json({ msg: `Product with id ${productId} Not Found!` });
  }
  exitProduct.name = req.body.name;
  exitProduct.price = req.body.price;
  exitProduct.category = req.body.category;
  res.status(200).json(exitProduct);
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.productId);
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ msg: `Product with id ${productId} Not Found!` });
  }
  products.splice(productIndex, 1);
  res.status(200).json({ msg: "product Deleted Successfully!" });
};

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
