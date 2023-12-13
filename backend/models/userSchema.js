const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "batchManager", "trainer", "student"],
    required: true,
    default: "student",
  },
  password: {
    type: String,
    require: true,
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
