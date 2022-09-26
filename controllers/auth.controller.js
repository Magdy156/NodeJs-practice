const authModel = require("../models/auth.model");

exports.getRegisterPage = (req, res) => {
  res.render("register");
};

exports.postRegisterData = (req, res) => {
  authModel
    .registerFunctionModel(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    )
    .then((user) => {
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.postLoginData = (req, res) => {
  authModel
    .loginFunctionModel(req.body.email, req.body.password)
    .then((id) => {
      res.redirect("/");
      req.session.userId = id;
    })
    .catch((err) => {
      console.log(err);
    });
};
