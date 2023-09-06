const express = require("express");
const Boda = require("../models/bodaModel");

const router = express.Router();

// boda route
router.get("/boda", (req, res) => {
  res.render("boda.pug");
});

router.post("/regboda", async (req, res) => {
  try {
    const boda = new Boda(req.body);
    await boda.save();
    res.redirect("/api/boda");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("boda");
    console.log(error);
  }
});
router.get("/list", async (req, res) => {
  try {
    let items = await Boda.find();
    res.render("bodalist.pug", { bodas: items });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get bodas" });
  }
});

router.post('/search', async (req, res) => {
  try {
      console.log(req.body);
      const searchTerm = req.body.search.toLowerCase();
      const items = await Boda.find({
          $or: [
              { firstname: { $regex: searchTerm, $options: 'i' } },
              { lastname: { $regex: searchTerm, $options: 'i' } },
              { bodamodel: { $regex: searchTerm, $options: 'i' } },
              { date: { $regex: searchTerm, $options: 'i' } },
              { time: { $regex: searchTerm, $options: 'i' } }
          ]
      });

      res.render('bodalist.pug', { bodas: items });
  } catch (error) {
      console.log(error);
      return res.status(400).send({ message: "Could not perform search" });
  }
});
router.post("/boda/delete", async (req, res) => {
  try {
    await Boda.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/boda/edit/:id", async (req, res) => {
  try {
    const emp = await Boda.findOne({
      _id: req.params.id,
    });
    res.render("editboda", { boda: emp });
  } catch (error) {
    res.status(400).send("Couldn't find boda in database");
    console.log(error);
  }
});

router.post("/regboda/edit", async (req, res) => {
  try {
    await Boda.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/api/list");
  } catch (error) {
    res.status(400).send("Could not find boda data");
    console.log(error);
  }
});

router.get("/boda/receipt/:id", async (req, res) => {
  try {
    const emp = await Boda.findOne({
      _id: req.params.id,
    });
    res.render("bodar", { boda: emp });
  } catch (error) {
    res.status(400).send("Couldn't find boda in database");
    console.log(error);
  }
});

module.exports = router;
