require("dotenv").config();
const user = require("../models/userSchema");
const allUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json({ users });
  } catch (e) {
    console.log("unable to fetch users ", e);
  }
};
const singleUser = (req, res) => {
  console.log("env", process.env.SOME_SECRETE_KEY);
  const userId = req.params.id;
  console.log(userId);
  res.send(`showing result for user id ${userId}`);
};
const createUser = async (req, res) => {
  console.log("controller");
  console.log(req.body);
  try {
    const newUser = await user.create(req.body);
    res.json({ message: "user Created", user: newUser });
  } catch (e) {
    res.send("Error ", e);
  }
};
const updateUser = (req, res) => {
  res.send("update user");
};
const deleteUser = (req, res) => {
  res.send("delete user");
};

module.exports = { allUsers, createUser, updateUser, deleteUser, singleUser };
