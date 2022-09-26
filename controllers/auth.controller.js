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
