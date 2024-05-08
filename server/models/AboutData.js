const mongoose = require("mongoose");
const aboutData = mongoose.Schema({
  title: String,
  text: String,
  file: String,
});

module.exports = mongoose.model("AboutData", aboutData);
