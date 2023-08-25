const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel")


router.get("/index",(req, res) => {
  res.render("index.pug");
});



module.exports = router;
