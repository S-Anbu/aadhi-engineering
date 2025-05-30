const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: String,
  password: String,
  phone: String,
  altPhone: String,
  isOnline:Boolean,
  token: String,
 
});


const ImageSchema = new mongoose.Schema({
  urls: {
    type: [String],
     required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const Imagemodel = mongoose.model('Image', ImageSchema);

const adminModel =  mongoose.model("admin", userSchema);

module.exports = {adminModel,Imagemodel};
