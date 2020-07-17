const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/users", (req, res) => {
  User.find().then((d) => res.send(d));
});

router.get("/users/:email&:password", (req, res) => {
  User.findOne({
    email: req.params.email,
    password: req.params.password,
  }).then((user) => res.send(user));
});

router.post("/users/add", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

module.exports = router;
