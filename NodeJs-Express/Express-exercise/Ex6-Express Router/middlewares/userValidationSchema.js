import { body } from "express-validator";

export const validationSchema = () => {
  return [
    body("userName").notEmpty().withMessage("userName field is required!"),
    body("age").notEmpty().withMessage("age field is required!"),
  ];
};
