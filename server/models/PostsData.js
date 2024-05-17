const mongoose = require("mongoose");
const postsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
      required: [true],
    },
    favorited: {
      type: Boolean,
      required: [false],
    }
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("PostsData", postsSchema);
