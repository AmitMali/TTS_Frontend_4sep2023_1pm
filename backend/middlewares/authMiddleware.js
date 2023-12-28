require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const hashPassword = (req, res, next) => {
  if (req.body.password) {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      req.body.password = hash;
      next();
    });
  } else {
    next();
  }
};

const isAuthorized = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SEC_KEY);
    // console.log(token, decoded);
    req.id = decoded.id;
    req.role = decoded.role;
    next();
  } else {
    res.status(401).json({ error: "unauthorized" });
    return;
  }
};

module.exports = { hashPassword, isAuthorized };
