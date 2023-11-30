const express = require("express");
const router = express.Router();

const { hashPassword } = require("../middlewares/authMiddleware");
const {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router
  .get("/", allUsers)
  .use(hashPassword)
  .post("/", createUser)
  .patch("/", updateUser)
  .delete("/", deleteUser);

module.exports = router;
