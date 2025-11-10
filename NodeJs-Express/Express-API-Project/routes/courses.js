// Route => endpoints,routes

import express from "express";
import { validationSchema } from "../middlewares/validationSchema.js";
import {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourseWithPut,
  updateCourseWithPatch,
  deleteCourse,
} from "../controllers/coursesController.js";

const router = express.Router();

router.route("/").get(getAllCourses).post(validationSchema(), addCourse);

router
  .route("/:courseId")
  .get(getCourse)
  .put(updateCourseWithPut)
  .patch(updateCourseWithPatch)
  .delete(deleteCourse);

export default router;
