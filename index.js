const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 7003;
const db = require("./queries");

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/", function (req, res) {
  res.cookie("name", "express").send("cookie set"); //Sets name = express
  console.log("Cookies: ", req.cookies);
});

app.get("/messages", db.getMessages);
app.post("/messages", db.createMessage);

app.get("/users", db.getUsers);
app.post("/users", db.createUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
