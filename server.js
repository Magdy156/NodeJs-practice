const port = 2200;
let data = {};
// require express to run server and routes
const express = require("express");

// start up an instance of app
const app = express();

// require bodyparser
// let bodyParser = require("body-parser");
// bodyParser = bodyParser.urlencoded({ extended: false });
app.use(express.urlencoded({ extended: false }));

// reqyire path
const path = require("path");

app.use(express.static(path.join(__dirname + "//assets")));

// setting ejs
app.set("view engine", "ejs");
app.set("views", "views");

//all => (get-post-put-patch-delete)

app.get("/", (req, res) => {
  res.render("index", { name: "Magdy", job: "Engineer" });
});
app.post("/form", (req, res) => {
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
