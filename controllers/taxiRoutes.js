const express = require("express");
const Taxi = require("../models/taxiModel");

const router = express.Router();

router.get("/taxi", (req, res) => {
  res.render("taxi.pug");
});

router.post("/regtaxi", async (req, res) => {
  try {
    const taxi = new Taxi(req.body);
    await taxi.save();
    res.redirect("/api/taxi");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("taxi.pug");
    console.log(error);
  }
});

router.get("/taxilist", async (req, res) => {
  try {
    let items = await Taxi.find();
    const taxiCount = await Taxi.countDocuments();

    res.render("taxilist.pug", { taxis: items, taxiCount });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get taxis" });
  }
});

// how to delete data from a database
router.post("/taxi/delete", async (req, res) => {
  try {
    await Taxi.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/taxi/edit/:id", async (req, res) => {
  try {
    const taxi1 = await Taxi.findOne({
      _id: req.params.id,
    });
    res.render("edittaxi", { taxi: taxi1 });
  } catch (error) {
    res.status(400).send("Couldn't find taxi in database");
    console.log(error);
  }
});

router.post("/regtaxi/edit", async (req, res) => {
  try {
    await Taxi.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/taxilist");
  } catch (error) {
    res.status(400).send("Could not find taxi data");
    console.log(error);
  }
});



module.exports = router;
