// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String },
  streetAddress: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  facebook: { type: String },
  instagram: { type: String },
  pinterest: { type: String },
});

userSchema.statics.findOneByEmail = function(email) {
  return this.findOne({ email });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
