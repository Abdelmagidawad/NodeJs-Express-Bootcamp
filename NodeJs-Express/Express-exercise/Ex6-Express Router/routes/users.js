// Routes => End Points
import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { validationSchema } from "../middlewares/userValidationSchema.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(validationSchema(), createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
