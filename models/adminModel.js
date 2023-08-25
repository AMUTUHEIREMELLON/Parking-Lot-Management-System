const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registerSchema = new mongoose.Schema({
  firstname: {
    type:String,
    trim:true,
  },
  lastname: {
    type:String,
    trim:true,
  },
  username: {
    type:String,
    trim:true,
  },
  phonenumber: {
    type:String,
    trim:true,
  },
  email: {
    type:String,
    trim:true,
    required:true,
  },
  sex:{
    type:String,
    trim:true,
  },
  role: {
    type:String,
    trim:true,
  },
  section: {
    type:String,
    trim:true,
  },
  password: {
    type:String,
    trim:true,
  },
});

registerSchema.plugin(passportLocalMongoose,{usernameField: 'email'});
module.exports = mongoose.model('admin', registerSchema);