const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/users", (req, res) => {
  User.find().then((d) => res.send(d));
});

module.exports = router;
