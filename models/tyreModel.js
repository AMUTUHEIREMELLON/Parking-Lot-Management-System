const mongoose = require("mongoose");

const tyreSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,},

  lastname:{
    type: String,
    required: true,
    trim: true,
  },
  telephone: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  model: {
    type: String,
  },
  size: {
    type: String,
  },
  tyrenumber: {
    type:String,
  },
  cost: {
    type:String,
  }
  
  })

  module.exports = mongoose.model("tyre", tyreSchema); 