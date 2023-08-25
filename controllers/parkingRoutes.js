const express = require("express");
const Parking = require("../models/parkingModel");

const router = express.Router();


router.get("/parking", (req, res) =>{
  res.render("parking.pug")
});


router.post("/regparking", async (req, res) => {
  try {
    const parking = new Parking(req.body);
    await parking.save();
    res.redirect("/api/parking");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("parking");
    console.log(error);
  }
});

module.exports = router;