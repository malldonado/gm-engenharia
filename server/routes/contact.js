const express = require('express');
const { getContactData, postContactData, deleteContactData } = require('../controllers/contact');
const router = express.Router();

router.get('/contact', getContactData);
router.post('/contact', postContactData);
router.delete('/contact/:id', deleteContactData);

module.exports = router;