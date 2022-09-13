let express = require("express");
let app = express();
require("dotenv").config();

console.log("Hello World");

app.use(function middleware(req, res, next) {
  console.log(req.method, " ", req.path, " - ", req.ip);
  next();
});

absolutePath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
