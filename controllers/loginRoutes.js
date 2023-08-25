const express = require("express");
const Login = require("../models/loginModel")
const router = express.Router();

router.get("/login",(req, res) => {
  res.render("login.pug");
});

router.post("/reglogin", async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.save();
    res.redirect("/api/login");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("login");
    console.log(error);
  }
});

router.get("/loginlist", async (req, res) => {
  try {
    let items = await Login.find();
    res.render("loginlist.pug", { logins: items });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get logins" });
  }
});

// how to delete data from a database
router.post("/login/delete", async (req, res) => {
  try {
    await Login.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/login/edit/:id", async (req, res) => {
  try {
    const login1 = await Login.findOne({
      _id: req.params.id,
    });
    res.render("editlogin", {login: login1});
  } catch (error) {
    res.status(400).send("Couldn't find login in database");
    console.log(error);
  }
});

router.post("/reglogin/edit", async (req, res) => {
  try{
    await Login.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/api/loginlist")
  }
  catch(error){
    res.status(400).send("Could not find login data");
    console.log(error);
  }
});


module.exports = router;



