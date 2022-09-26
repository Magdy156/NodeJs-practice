const port = 2200;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const ejsLint = require("ejs-lint");
const path = require("path");
app.use(express.static(path.join(__dirname, "//assets")));

app.set("view engine", "ejs");
app.set("views", "views");

const bookRouter = require("./routers/book");
const router = require("./routers/book");
const authRoute = require("./routers/auth.route");

app.use("/", bookRouter);
app.use("/books", bookRouter);
app.all("/books/:id", bookRouter);
app.use("/", authRoute);

app.get("/about", (req, res) => {
  res.render("about");
});

// app.get("/details", (req, res) => {
//   res.render("details");
// });

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.get("/register", (req, res) => {
//   res.render("register");
// });

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
