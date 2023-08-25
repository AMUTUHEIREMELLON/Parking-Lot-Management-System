const express = require("express");
const Battery = require("../models/batteryModel");

const router =express.Router();


router.get("/battery",(req, res) =>{
  res.render("battery.pug");
});


router.post("/regbattery", async (req, res) => {
  try {
    const battery = new Battery(req.body);
    await battery.save();
    res.redirect("/api/battery");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("battery");
    console.log(error);
  }
});

router.get("/batterylist", async (req, res) => {
  try {
    let items = await Battery.find();
    res.render("batterylist.pug", { batterys: items });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get batterys" });
  }
});

// how to delete data from a database
router.post("/battery/delete", async (req, res) => {
  try {
    await Battery.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/battery/edit/:id", async (req, res) => {
  try {
    const battery = await Battery.findOne({
      _id: req.params.id,
    });
    res.render("editbattery", {battery: battery});
  } catch (error) {
    res.status(400).send("Couldn't find battery in database");
    console.log(error);
  }
});

router.post("/regbattery/edit", async (req, res) => {
  try{
    await Battery.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/api/batterylist")
  }
  catch(error){
    res.status(400).send("Could not find battery data");
    console.log(error);
  }
});


module.exports = router;