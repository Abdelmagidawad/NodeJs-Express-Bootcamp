import { body } from "express-validator";

export const validationSchema = () => {
  return [
    body("name").notEmpty().withMessage("Product name is required!"),
    body("price").notEmpty().withMessage("Product Price is required!"),
    body("category").notEmpty().withMessage("Product category is required!"),
  ];
};
