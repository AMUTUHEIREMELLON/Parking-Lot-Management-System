const express = require("express");
const Coaster = require("../models/coasterModel");

const router = express.Router();

router.get("/coaster", (req, res) => {
  res.render("coaster.pug");
});

router.post("/regcoaster", async (req, res) => {
  try {
    const coaster = new Coaster(req.body);
    await coaster.save();
    res.redirect("/api/coaster");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("coaster");
    console.log(error);
  }
});

router.get("/coasterlist", async (req, res) => {
  try {
    let items = await Coaster.find();
    const coasterCount = await Coaster.countDocuments();
    res.render("coasterlist.pug", { coasters: items });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get coasters" });
  }
});

// how to delete data from a database
router.post("/coaster/delete", async (req, res) => {
  try {
    await Coaster.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/coaster/edit/:id", async (req, res) => {
  try {
    const coaster1 = await Coaster.findOne({
      _id: req.params.id,
    });
    res.render("editcoaster", { coaster: coaster1 });
  } catch (error) {
    res.status(400).send("Couldn't find coaster in database");
    console.log(error);
  }
});

router.post("/regcoaster/edit", async (req, res) => {
  try {
    await Coaster.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/coasterlist");
  } catch (error) {
    res.status(400).send("Could not find coaster data");
    console.log(error);
  }
});

module.exports = router;
