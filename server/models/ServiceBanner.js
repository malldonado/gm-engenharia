const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema(
  {
    nameServiceBanner: {
      type: String,
      required: [true, "Name service is required"],
      trim: true,
      text: true,
    },
    descriptionServiceBanner: {
      type: String,
      required: [true, "Value service is required"],
      trim: true,
      text: true,
    },
    imageServiceBanner: {
      type: String,
      required: [true, "Image service is required"],
      trim: true,
      text: true,
    },
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);

module.exports = mongoose.model("ServiceBanner", serviceSchema);
