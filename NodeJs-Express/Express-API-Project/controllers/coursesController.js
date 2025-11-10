// Controllers =>Logic

import courses from "../models/coursesModel.js";
import { validationResult } from "express-validator";

// @desc Get all courses
// @route /api/courses
// @method  GET
const getAllCourses = (req, res) => {
  if (!courses.length) {
    return res.status(404).json({ msg: "courses not found!" });
  }
  res.status(200).json(courses);
};

// @desc Get single course
// @route /api/courses/:courseId
// @method  GET
const getCourse = (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = courses.find((course) => course.id === courseId);
  if (!course) {
    return res.status(404).json({ msg: "Course Not Found!" });
  }
  res.status(200).json(course);
};

// @desc Create a New Course
// @route /api/course
// @method  POST
const addCourse = (req, res) => {
  const course = { id: courses.length + 1, ...req.body };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
    // return res.status(400).json(errors.array()[0].msg);
  }
  courses.push(course);
  res.status(201).json(course);
};

// @desc Update a course
// @route /api/courses/:courseId
// @method  PUT,PATCH
const updateCourseWithPut = (req, res) => {
  const courseId = parseInt(req.params.courseId);
  let course = courses.find((course) => course.id === courseId);
  if (!course) {
    return res.status(404).json({ msg: "course not found!" });
  }
  course.title = req.body.title;
  course.price = req.body.price;
  res.status(200).json(course);
};

const updateCourseWithPatch = (req, res) => {
  const courseId = parseInt(req.params.courseId);
  let course = courses.find((course) => course.id === courseId);
  if (!course) {
    return res.status(404).json({ msg: "course not found!" });
  }
  course = { ...course, ...req.body };
  res.status(200).json(course);
};

// @desc Delete a course
// @route /api/courses/:courseId
// @method  DELETE
const deleteCourse = (req, res) => {
  const courseId = parseInt(req.params.corseId);
  let courseIndex = courses.findIndex((course) => course.id === courseId);
  if (courseIndex === -1) {
    return res.status(404).json({ msg: "course not found!" });
  }
  courses.splice(courseIndex, 1);
  res.status(200).json({ success: "course deleted successfully" });
};

export {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourseWithPut,
  updateCourseWithPatch,
  deleteCourse,
};
