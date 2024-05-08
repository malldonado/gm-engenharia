const path = require("path");
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');
const { updateAboutData, getAboutLastData } = require("../controllers/about");

router.put('/about', upload.single('file'), updateAboutData);
router.get("/about/latest", getAboutLastData);
router.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

module.exports = router;
