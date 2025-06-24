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


const WeldingImageSchema = new mongoose.Schema({
  urls: {
    type: [String],
     required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});
const plumbingImageSchema = new mongoose.Schema({
  urls: {
    type: [String],
     required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});
const ElectricalImageSchema = new mongoose.Schema({
  urls: {
    type: [String],
     required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const WeldingImagemodel = mongoose.model('Welding', WeldingImageSchema);
const plumbingImagemodel = mongoose.model('Plumbing', plumbingImageSchema);
const ElectricalImagemodel = mongoose.model('Electrical', ElectricalImageSchema);

const adminModel =  mongoose.model("admin", userSchema);

module.exports = {adminModel,WeldingImagemodel,plumbingImagemodel,ElectricalImagemodel};
