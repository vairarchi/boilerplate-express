let express = require('express');
let app = express();

console.log("Hello World")

// app.get("/", function(req, res) {
//     res.send("Hello Express");
//   });

    absolutePath = __dirname + '/views/index.html';
  app.get("/", function(req, res){
    res.sendFile(absolutePath);
  });

  app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
    res.json({"message": "Hello json"});
});
































 module.exports = app;
