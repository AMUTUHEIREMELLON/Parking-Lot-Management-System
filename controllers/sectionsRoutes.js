const express = require("express");
const router = express.Router();

router.get("/sections",(req, res) => {
  res.render("sections.pug");
});



module.exports = router;
