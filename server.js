const port = 2200;

const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "//assets")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
