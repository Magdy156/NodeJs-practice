const port = 2000;

// require express to run server and routes
const express = require("express");

// start up an instance of app
const app = express();

// let bodyParser = require("body-parser");
// bodyParser = bodyParser.urlencoded({ extended: true });

app.use((req, res, next) => {
  console.log("welcome from Home");
  res.send("<h1>welcome from Home</h1>");
  next();
});
app.use((req, res, next) => {
  console.log("welcome from About");
  next();
});
app.use((req, res, next) => {
  console.log("welcome from Contact");
});

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
