const express = require("express");
const app = express();
const PORT = 5555;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");

dotenv.config();

mongoose.connect(process.env.CONNECT, {
  dbName: "discoffee",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  }),
);

app.use(express.static("../client"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
// Axios requests readable middleware
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  User.find().then((d) => res.send(d));
});

app.post("/api/users/add", (req, res) => {
 const user = new User(req.body);
 user.save();
});

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid);
});
