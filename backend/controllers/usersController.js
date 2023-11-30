require("dotenv").config();
const allUsers = (req, res) => {
  res.send("show all users");
};
const singleUser = (req, res) => {
  console.log("env", process.env.SOME_SECRETE_KEY);
  const userId = req.params.id;
  console.log(userId);
  res.send(`showing result for user id ${userId}`);
};
const createUser = (req, res) => {
  console.log("controller");
  console.log(req.body);
  res.send("create user");
};
const updateUser = (req, res) => {
  res.send("update user");
};
const deleteUser = (req, res) => {
  res.send("delete user");
};

module.exports = { allUsers, createUser, updateUser, deleteUser, singleUser };
