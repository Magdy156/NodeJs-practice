const port = 2200;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const ejsLint = require("ejs-lint");
const path = require("path");
app.use(express.static(path.join(__dirname, "//assets")));

var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);

var store = new MongoDBStore({
  uri: "mongodb://localhost:27017/bookStore",
  collection: "mySessions",
});

app.use(
  session({
    secret: "This is a secret lkjasnfhkjsf",

    store: store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

const bookRouter = require("./routers/book");
const router = require("./routers/book");
const authRoute = require("./routers/auth.route");
const flash = require("connect-flash");
app.use(flash());

app.use("/", bookRouter);
app.use("/books", bookRouter);
app.all("/books/:id", bookRouter);
app.use("/", authRoute);

app.get("/about", (req, res) => {
  res.render("about", { verifUser: req.session.id });
});

// app.get("/details", (req, res) => {
//   res.render("details");
// });

app.get("/contact", (req, res) => {
  res.render("contact", { verifUser: req.session.id });
});

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/register", (req, res) => {
//   res.render("register");
// });

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
