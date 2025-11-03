// -*- Controllers  -*-
// =>Logic

import posts from "../models/postsModel.js";

// @desc Get all posts
// @route /api/posts
// @method GET
const getPosts = (req, res, next) => {
  let limit = parseInt(req.query.limit);
  if (posts.length === 0) {
    const error = new Error("No Posts Found!");
    error.status = 404;
    return next(error);
  }
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

// @desc Get single post
// @route /api/posts/:id
// @method GET
const getPost = (req, res, next) => {
  let id = parseInt(req.params.id);
  let post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A Post with the id of ${id} was not Found!`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

// @desc Create new post
// @route /api/posts
// @method POST
const createPost = (req, res, next) => {
  let newPost = { id: posts.length + 1, title: req.body.title };
  if (!newPost.title) {
    const error = new Error("Please include a title");
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc Update post
// @route /api/posts/:id
// @method PUT
const updatePost = (req, res, next) => {
  let id = parseInt(req.params.id);
  let post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A Post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc Delete post
// @route /api/posts/:id
// @method DELETE
const deletePost = (req, res, next) => {
  let id = parseInt(req.params.id);
  let indexPost = posts.findIndex((post) => post.id === id);
  if (indexPost === -1) {
    const error = new Error(`A Post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  posts.splice(indexPost, 1);
  res.status(200).json(posts);
};

export { getPosts, getPost, createPost, updatePost, deletePost };
