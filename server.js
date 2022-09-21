const port = 2000;

// require express to run server and routes
const express = require("express");

// start up an instance of app
const app = express();

// let bodyParser = require("body-parser");
// bodyParser = bodyParser.urlencoded({ extended: true });

//all => (get-post-put-patch-delete)
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Welcome to About</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to Contact</h1>");
});

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
