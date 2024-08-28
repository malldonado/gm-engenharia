const path = require("path");
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  deletePostsData,
  createPostData,
  getAllPostsData,
  favoritePostsData,
  getFavoriteStatus,
  getAllFavoritePosts,
  getFavoriteImages,
  getImageById
} = require("../controllers/posts");

router.post("/posts", upload.single("file"), createPostData);
router.delete("/posts/:id", deletePostsData);
router.get("/posts", getAllPostsData);
router.post("/posts/:id/favorite", favoritePostsData);
router.get("/posts/:id/favorite", getFavoriteStatus);
router.get("/posts/favorite", getAllFavoritePosts);
router.get("/posts/favorite/image", getFavoriteImages);
router.get("/posts/:id/favorite/image", getImageById);
router.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

module.exports = router;
