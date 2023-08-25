const express = require('express');
const Admin = require('../models/adminModel');
const passport = require('passport');
const router = express.Router();
// const adminModel = require('../models/adminModel');

router.get('/admin', (req, res) => {
  res.render('admin.pug');
});

router.post('/register', async (req, res) => {
  try{
    const admin = new Admin(req.body);
    console.log(req.body);
    await Admin.register(admin, req.body.password);
    res.redirect("/api/admin");
  }
  catch(error){
    res.status(400).send({message: "Failed to register administrator."});
    console.log(error);
  }
});

router.get('/login', (req, res) => {
  res.render("login.pug");
});
router.post("/login", passport.authenticate("local", 
{faiureRedirect:"/api/login"}),
(req,res) => {
  req.session.user = req.user
  let loggedInUser = req.session.user.firstname
  console.log(loggedInUser)
  if(req.session.user.section === "parking"){
    res.redirect("/api/dash")
  } 
  if(req.session.user.section === "battery"){
    res.redirect("/api/batteryDash")
  }
  if(req.session.user.section === "tireclinic"){
    res.redirect("/api/tyreDash")
  }
  // res.redirect("dash")
}
);

router.get("/logout", (req, res) => {
  req.session.destroy(()=>{res.redirect("/api/login")});
  console.log("You have logged out");
});





module.exports = router