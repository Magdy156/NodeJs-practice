const express = require("express");
// let bodyParser = require("body-parser");
// bodyParser = bodyParser.urlencoded({ extended: true });
const app = express();
const port = 8000;
const data = [];
app.post("/addMovie", (req, res) => {
  console.log(req.body);
  data.push(req.body);
});

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
