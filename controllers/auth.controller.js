const authModel = require("../models/auth.model");

exports.getRegisterPage = (req, res) => {
  res.render("register", {
    verifUser: req.session.id,
    message: req.flash("error")[0],
  });
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
      // console.log(err);
      req.flash("error", err);
      res.redirect("register");
    });
};

exports.getLoginPage = (req, res) => {
  res.render("login", {
    verifUser: req.session.id,
    message: req.flash("error")[0],
  });
};

exports.postLoginData = (req, res) => {
  authModel
    .loginFunctionModel(req.body.email, req.body.password)
    .then((id) => {
      res.redirect("/");
      req.session.userId = id;
    })
    .catch((err) => {
      req.flash("error", err);
      res.redirect("login");
    });
};

exports.logoutFunctionController = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
