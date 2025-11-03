// import express from "express";

// const router = express.Router();

// const posts = [
//   { id: 1, title: "Post One" },
//   { id: 2, title: "Post Two" },
//   { id: 3, title: "Post Three" },
// ];

// // **GET Request **
// // Get all posts
// router.get("/", (req, res, next) => {
//   let limit = parseInt(req.query.limit);
//   if (posts.length === 0) {
//     const error = new Error("No Posts Found!");
//     error.status = 404;
//     return next(error);
//   }
//   if (!isNaN(limit) && limit > 0) {
//     return res.status(200).json(posts.slice(0, limit));
//   }
//   res.status(200).json(posts);
// });

// // Get single post
// router.get("/:id", (req, res, next) => {
//   let id = parseInt(req.params.id);
//   let post = posts.find((post) => post.id === id);
//   if (!post) {
//     // return res
//     //   .status(404)
//     //   .json({ msg: `A Post with the id of ${id} was not Found!` });
//     //
//     const error = new Error(`A Post with the id of ${id} was not Found!`);
//     error.status = 404;
//     return next(error);
//     //
//   }
//   res.status(200).json(post);
// });
// // **POST Request**
// // Create new post
// router.post("/", (req, res, next) => {
//   let newPost = { id: posts.length + 1, title: req.body.title };
//   if (!newPost.title) {
//     // return res.status(400).json({ msg: "Please include a title" });
//     //
//     const error = new Error("Please include a title");
//     error.status = 400;
//     return next(error);
//     //
//   }
//   posts.push(newPost);
//   res.status(201).json(posts);
// });

// // **PUT Request**
// // Update post
// router.put("/:id", (req, res, next) => {
//   let id = parseInt(req.params.id);
//   let post = posts.find((post) => post.id === id);
//   if (!post) {
//     // return res
//     //   .status(404)
//     //   .json({ msg: `A Post with the id of ${id} was not found` });
//     //
//     const error = new Error(`A Post with the id of ${id} was not found`);
//     error.status = 404;
//     return next(error);
//     //
//   }
//   post.title = req.body.title;
//   res.status(200).json(posts);
// });

// // **DELETE Request**
// // Delete post
// router.delete("/:id", (req, res, next) => {
//   let id = parseInt(req.params.id);
//   let indexPost = posts.findIndex((post) => post.id === id);
//   if (indexPost === -1) {
//     // return res
//     //   .status(404)
//     //   .json({ msg: `A Post with the id of ${id} was not found` });
//     //
//     const error = new Error(`A Post with the id of ${id} was not found`);
//     error.status = 404;
//     return next(error);
//     //
//   }
//   posts.splice(indexPost, 1);
//   res.status(200).json(posts);
// });

// export default router;

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Hint => to use this mvc style create a folders controllers & models

// Using Controllers => (MVC-style structure)

// -*- Routes -*-
// => (URLs).

import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";

const router = express.Router();

// **GET Request **
// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

// **POST Request**
// Create new post
router.post("/", createPost);

// **PUT Request**
// Update post
router.put("/:id", updatePost);

// **DELETE Request**
// Delete post
router.delete("/:id", deletePost);

export default router;
