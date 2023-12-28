const express = require("express");
const router = express.Router();

const { hashPassword, isAuthorized } = require("../middlewares/authMiddleware");
const {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
  singleUser,
  userProfile,
} = require("../controllers/usersController");

router
  .use(isAuthorized)
  .get("/", allUsers)
  .get("/profile", userProfile)
  .get("/:id", singleUser)
  .use(hashPassword)
  .post("/", createUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
