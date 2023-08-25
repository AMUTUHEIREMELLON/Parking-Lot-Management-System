const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
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
  cartype: {
    type: String,
    enum: ['Car', 'Truck', 'Taxi', 'Coaster']
  },
  services: {
    type: String,
    enum: ['day', 'night', 'threehours']
  },
  cost: {
    type: String,
    enum: ['2000', '3000', '5000']
  },

});

module.exports = mongoose.model("car", carSchema);
