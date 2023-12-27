require("dotenv").config();
var jwt = require("jsonwebtoken");
const user = require("../models/userSchema");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const formData = req.body;
  console.log(formData);
  try {
    const foundUser = await user.find({ email: formData.email }).exec();
    if (foundUser) {
      bcrypt.compare(
        formData.password,
        foundUser[0].password,
        function (err, result) {
          console.log(result, err);
          if (result) {
            var sercreteKey = process.env.SEC_KEY;
            var token = jwt.sign({ id: foundUser[0]._id }, sercreteKey);

            res.json({ login: "success", token });
          } else {
            res.json({ login: "failed" });
          }
        }
      );
    }
  } catch (e) {
    res.status(404).send("unable to found user");
  }
};

module.exports = { login };
