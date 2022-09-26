const route = require("express").Router();

const authController = require("../controllers/auth.controller");

const parse = require("express").urlencoded({ extended: false });

route.get("/register", authController.getRegisterPage);

route.post("/register", parse, authController.postRegisterData);

module.exports = route;
