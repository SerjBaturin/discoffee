const User = require("../models/user");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const verify = (req, res, next) => {
  const user = jwt.decode(req.cookies.TOKEN, process.env.JWT_SECRET_KEY);
  next(user);
};

module.exports = verify;
