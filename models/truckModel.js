const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  model: {
    type: String,
  },
  numberplate: {
    type: String,
    unique: true,
  },
  color: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  slotnumber: {
    type: String,
  },
  

});

module.exports = mongoose.model("truck", truckSchema);
