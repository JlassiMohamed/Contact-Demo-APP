const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  postUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController.js");

// test route for the all server side
router.get("/test", (req, res) => res.json({ msg: "backend works" }));
// express router method to create route for add a new user
router.post("/", postUser);

// express router method to create route for getting all users
router.get("/", getUsers);

// express router method to create route for getting users by id
router.get("/:id", getUserById);

//express router method to create route for deleting one user by id
router.delete("/:id", deleteUser);

// express router function to create function for updating a user by id
router.put("/:id", updateUser);

module.exports = router;
