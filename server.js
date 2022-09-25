const port = 2200;

const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "//assets")));

app.set("view engine", "ejs");
app.set("views", "views");

const bookRouter = require("./routers/book");

app.use("/", bookRouter);

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/details", (req, res) => {
  res.render("details");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use("/books", bookRouter);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
