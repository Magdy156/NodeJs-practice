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

const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { stderr } = require("process");

let url = "mongodb://localhost:27017/myTest";

let schemaStudent = mongoose.Schema({
  firstName: String,
  lastName: String,
  Age: Number,
  speciality: String,
});
let Student = mongoose.model("student", schemaStudent);

app.get("/", (req, res) => {
  mongoose.connect(url).then((res) => {
    console.log("connected");
    mongoose.disconnect();
  });
});

app.get("/createcollection", (req, res) => {
  mongoose.connect(url).then((res) => {
    // let std = new Student({
    //   firstName: "Magdy",
    //   lastName: "Hamdy",
    //   Age: 20,
    //   speciality: "Engineer",
    // });
    // std.save()
    Student.insertMany([
      {
        firstName: "Magdy",
        lastName: "Hamdy",
        Age: 20,
        speciality: "Engineer",
      },
      {
        firstName: "Gehad",
        lastName: "Magdy",
        Age: 15,
        speciality: "Designer",
      },
    ]).then((res) => {
      console.log(res);
      console.log("inserted");
    });
  });
});

const server = app.listen(port, () => {
  console.log(`server works on localhost ${port}`);
});
