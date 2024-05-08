const express = require('express');
const { serviceBanner, serviceImage } = require('../controllers/serviceBanner');
const router = express.Router();

router.post('/service-banner', serviceBanner);
router.get('/service-banner', serviceBanner);
router.get('/service-images', serviceImage);

module.exports = router;