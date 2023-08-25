const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phonenumber: {
    type: String,
  },
  sex: {
    type: String,
  },
});

module.exports = mongoose.model("register", registerSchema);
