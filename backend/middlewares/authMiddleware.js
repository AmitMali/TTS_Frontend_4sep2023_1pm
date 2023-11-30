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

module.exports = { hashPassword };
