const express = require("express");
const router = express.Router();

const { hashPassword } = require("../middlewares/authMiddleware");
const {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
  singleUser,
} = require("../controllers/usersController");

router
  .get("/", allUsers)
  .get("/:id", singleUser)
  .use(hashPassword)
  .post("/", createUser)
  .patch("/", updateUser)
  .delete("/", deleteUser);

module.exports = router;
