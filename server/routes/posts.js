const path = require("path");
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');
const { deletePostsData, createPostData, getAllPostsData } = require('../controllers/posts');

router.post('/posts', upload.single('file'), createPostData);
router.delete('/posts/:id', deletePostsData);
router.get("/posts", getAllPostsData);
router.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

module.exports = router;
