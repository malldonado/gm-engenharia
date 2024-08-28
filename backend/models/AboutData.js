const mongoose = require("mongoose");
const aboutData = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model("AboutData", aboutData);
