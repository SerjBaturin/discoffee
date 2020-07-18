const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const verify = require("../../verify");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// userSignin - /sagas/ on the CLIENT
router.get("/user/:email&:password", (req, res) => {
  User.findOne({
    email: req.params.email,
    password: req.params.password,
  }).then((user) => {
    res.cookie("TOKEN", user.token, { maxAge: 600000 });
    res.send(user);
  });
});

router.get("/user/check", (req, res) => {
  const user = jwt.decode(req.cookies.TOKEN, process.env.JWT_SECRET_KEY);
  res.send(user);
});

router.post("/user/add", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const payload = { name, email, password };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

  const user = new User({ name, email, password, token });
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

module.exports = router;
