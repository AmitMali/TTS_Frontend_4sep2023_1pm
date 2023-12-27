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
const singleUser = async (req, res) => {
  const userId = req.params.id;
  if (userId) {
    try {
      const foundUser = await user.findById(userId).exec();
      res.json({ user: foundUser });
    } catch (e) {
      res.send("unable to find error");
    }
  } else {
    res.send(`invalid request`);
  }
};
const createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.json({ message: "user Created", user: newUser });
  } catch (e) {
    res.status(404).send("Error ", e);
    console.log(e);
  }
};
const updateUser = async (req, res) => {
  const userId = req.params.id;
  if (userId) {
    try {
      const updatedUser = await user.findByIdAndUpdate(
        { _id: userId },
        req.body
      );
      res.json({ user: updatedUser });
    } catch (e) {
      res.send("unable to find error");
    }
  } else {
    res.send(`invalid request`);
  }
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  if (userId) {
    try {
      const updatedUser = await user.findByIdAndDelete(userId);
      res.json({ message: "user Deleted" });
    } catch (e) {
      res.send("unable to find error");
    }
  } else {
    res.send(`invalid request`);
  }
};

module.exports = { allUsers, createUser, updateUser, deleteUser, singleUser };
