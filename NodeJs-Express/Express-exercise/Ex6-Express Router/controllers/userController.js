// Logic

import users from "../models/userModel.js";
import { validationResult } from "express-validator";

const getAllUsers = (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ msg: "Users Not Found!" });
  }
  res.status(200).json(users);
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  let existUser = users.find((user) => user.id === id);
  if (!existUser) {
    return res.status(404).json({ msg: `User with id ${id} Not Found!` });
  }
  res.status(200).json(existUser);
};

const createUser = (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }
  users.push(user);
  res.status(201).json(user);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  let existUser = users.find((user) => user.id === id);
  if (!existUser) {
    return res.status(404).json({ msg: `User with id ${id} Not Found!` });
  }
  existUser.userName = req.body.userName;
  existUser.age = req.body.age;
  res.status(200).json({ msg: "User Updated Successfully!" });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ msg: `User with id ${id} Not Found!` });
  }
  users.splice(userIndex, 1);
  res.status(200).json({ msg: "User Deleted Successfully!" });
};

export { getAllUsers, getUser, createUser, updateUser, deleteUser };
