const express = require("express");
const Tyre = require("../models/tyreModel");

const router =express.Router();


router.get("/tyre",(req, res) =>{
  res.render("tyre.pug");
});


router.post("/regtyre", async (req, res) => {
  try {
    const tyre = new Tyre(req.body);
    await tyre.save();
    res.redirect("/api/tyre");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("tyre");
    console.log(error);
  }
});

router.get("/tyrelist", async (req, res) => {
  try {
    let items = await Tyre.find();
    const tyreCount = await Tyre.countDocuments();
    res.render("tyrelist.pug", { tyres: items, tyreCount });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get tyres" });
  }
});

router.post('/tyre/search', async (req, res) => {
  try {
    const searchTerm = req.body.search.toLowerCase();
    const item = await Tyre.find({
      $or: [
        { firstname: { $regex: searchTerm, $options: 'i' } },
        { lastname: { $regex: searchTerm, $options: 'i' } },
        { model: { $regex: searchTerm, $options: 'i' } },
        { date: { $regex: searchTerm, $options: 'i' } },
        { time: { $regex: searchTerm, $options: 'i' } },
        { tyretype: { $regex: searchTerm, $options: 'i' } }
      ]
    });

    res.render('tyrelist.pug', { tyres: item });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Could not perform search" });
  }
});

// how to delete data from a database
router.post("/tyre/delete", async (req, res) => {
  try {
    await Tyre.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/tyre/edit/:id", async (req, res) => {
  try {
    const tyre = await Tyre.findOne({
      _id: req.params.id,
    });
    res.render("edittyre", {tyre: tyre});
  } catch (error) {
    res.status(400).send("Couldn't find tyre in database");
    console.log(error);
  }
});

router.post("/regtyre/edit", async (req, res) => {
  try{
    await Tyre.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/api/tyrelist")
  }
  catch(error){
    res.status(400).send("Could not find tyre data");
    console.log(error);
  }
});


module.exports = router;