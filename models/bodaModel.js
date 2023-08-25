const mongoose = require("mongoose");

const bodaSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  date:{
    type: String,
  },
  time:{
    type: String,
  },
  slotnumber: {
    type: String,
  },
  nin: {
    type: String,
  },
  cost: {
    type: String,
    enum: ['2000', '3000', '5000']
  }
});

module.exports = mongoose.model("boda", bodaSchema);
