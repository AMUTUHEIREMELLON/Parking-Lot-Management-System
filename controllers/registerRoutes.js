const express = require("express");
const Register = require("../models/registerModel");

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register.pug");
});

router.post("/regregister", async (req, res) => {
  try {
    const register = new Register(req.body);
    await register.save();
    res.redirect("/api/register");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("register");
    console.log(error);
  }
});

module.exports = router;
