const User = require("../models/usersModel.js");
const asyncHandler = require("express-async-handler");

// postUser function to add a new user
exports.postUser = asyncHandler(async (req, res) => {
  // console.log(req.body)
  try {
    const newUser = new User({ ...req.body });
    const response = await newUser.save();
    res
      .status(200)
      .send({ message: `user posted successfully`, contact: response });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `user not posted` });
  }
});

//getUsers function to get all users
exports.getUsers = asyncHandler(async (req, res) => {
  try {
    const response = await User.find({});
    res.status(200).send({ message: `getting all users`, contacts: response });
  } catch (error) {
    res.status(400).send({ message: `can not get data` });
  }
});

//getUserById function to retrieve user by id
exports.getUserById = asyncHandler(async (req, res) => {
  try {
    const response = await User.findById({ _id: req.params.id });
    res.status(200).send({ message: `getting the user`, contact: response });
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

// deleteUser function to omit one user by id
exports.deleteUser = asyncHandler(async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    console.log(result);
    if (result.deletedCount) {
      res.status(200).send({ message: `user is deleted successfully` });
    } else {
      res.status(400).send({ message: "user was already deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "no user matches this id" });
  }
});

// updateUser function to edit a user by id
exports.updateUser = asyncHandler(async (req, res) => {
  try {
    const response = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res
      .status(200)
      .send({ message: `user updated successfully`, contact: response });
  } catch (error) {
    res.status(400).send({ message: `no user matches this id` });
  }
});
