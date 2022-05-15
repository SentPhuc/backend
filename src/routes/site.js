const express = require('express');
const router = express.Router();

// Get controller site
const SiteController = require('../app/controllers/Sitecontroller');

router.use('/search',SiteController.search);
router.use('/',SiteController.home);

module.exports = router;