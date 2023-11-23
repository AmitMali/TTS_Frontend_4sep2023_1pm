const express = require("express");
const router = express.Router();
const {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router
  .get("/", allUsers)
  .post("/", createUser)
  .patch("/", updateUser)
  .delete("/", deleteUser);

module.exports = router;
