const allUsers = (req, res) => {
  res.send("show all users");
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

module.exports = { allUsers, createUser, updateUser, deleteUser };
