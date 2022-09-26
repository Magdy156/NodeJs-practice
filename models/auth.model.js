const { promiseImpl } = require("ejs");
const mongoose = require("mongoose");
const { resolve } = require("path");
const bcrypt = require("bcrypt");
const { use } = require("../routers/auth.route");

let registerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

let User = mongoose.model("user", registerSchema);

let url = "mongodb://localhost:27017/bookStore";

exports.registerFunctionModel = (firstName, lastName, email, password) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(url)
      .then(() => {
        return User.findOne({ email: email });
      })
      .then((userEmail) => {
        if (userEmail) {
          mongoose.disconnect();
          reject("email is used!");
        } else {
          return bcrypt.hash(password, 10);
        }
      })
      .then((hashedpass) => {
        let user = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedpass,
        });
        return user.save();
      })
      .then((user) => {
        mongoose.disconnect();
        resolve("registered!");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

exports.loginFunctionModel = (email, password) => {
  return new Promise((resolved, rejected) => {
    mongoose
      .connect(url)
      .then(() => {
        return User.findOne({ email: email });
      })
      .then((user) => {
        if (user) {
          bcrypt.compare(password, user.password).then((verified) => {
            if (verified) {
              mongoose.disconnect();
              resolved(user._id);
            } else {
              rejected("wrong password");
            }
          });
        } else {
          mongoose.disconnect();
          rejected("you are not registered");
        }
      });
  });
};
