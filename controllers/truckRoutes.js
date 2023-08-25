const express = require("express");
const Truck = require("../models/truckModel");

const router = express.Router();


router.get("/truck",(req, res) =>{
  res.render("truck.pug")
});


router.post("/regtruck", async (req, res) => {
  try {
    const truck = new Truck(req.body);
    await truck.save();
    res.redirect("/api/truck");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("truck");
    console.log(error);
  }
});

router.get("/trucklist", async (req, res) => {
  try {
    let items = await Truck.find();
    const truckCount = await Truck.countDocuments();

    res.render("trucklist.pug", { trucks: items, truckCount });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get trucks" });
  }
});

// how to delete data from a database
router.post("/truck/delete", async (req, res) => {
  try {
    await Truck.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/truck/edit/:id", async (req, res) => {
  try {
    const truck1 = await Truck.findOne({
      _id: req.params.id,
    });
    res.render("edittruck", { truck: truck1 });
  } catch (error) {
    res.status(400).send("Couldn't find truck in database");
    console.log(error);
  }
});

router.post("/regtruck/edit", async (req, res) => {
  try {
    await Truck.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/trucklist");
  } catch (error) {
    res.status(400).send("Could not find truck data");
    console.log(error);
  }
});


module.exports = router;