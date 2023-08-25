const express = require("express");
const router = express.Router();
const { ensureLoggedIn } = require("connect-ensure-login");
const boda = require("../models/bodaModel");
const { async } = require("regenerator-runtime");


router.get("/dash", ensureLoggedIn("/api/login"), async(req, res) => {
  // const items = await boda.find(); {bodas: items}
  res.render("dash.pug");
});

router.get("/parkingDash", ensureLoggedIn("/api/login"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  res.render("parkingDash.pug");
});

router.get("/batteryDash",  ensureLoggedIn("/api/login"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  res.render("batteryDash.pug");
});

router.get("/tyreDash",  ensureLoggedIn("/api/login"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  res.render("tyreDash.pug");
});

module.exports = router;
