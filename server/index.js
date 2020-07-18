const express = require("express");
const app = express();
const PORT = 5555;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
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
app.use(cookieParser());

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    secure: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);

// Routing
app.use("/api/admin", require("./routes/Admin"));
app.use("/api", require("./routes/User"));

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid);
});
