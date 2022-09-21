const port = 2200;
let data = {};
// require express to run server and routes
const express = require("express");

// start up an instance of app
const app = express();

let bodyParser = require("body-parser");
bodyParser = bodyParser.urlencoded({ extended: false });

//all => (get-post-put-patch-delete)
app.get("/", (req, res) => {
  res.send(
    '<form action="/form" method="POST"><input type="text" name="firstName"><button type="submit">Send</button></form>'
  );
});
app.post("/form", bodyParser, (req, res) => {
  data = req.body;
  res.send(data);
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
