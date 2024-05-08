const express = require("express");
const router = express.Router();
const { updateUserData, getUserData } = require("../controllers/user");

router.put("/user-update", updateUserData);
router.get("/user-update", getUserData);

module.exports = router;
