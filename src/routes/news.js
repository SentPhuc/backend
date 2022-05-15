const express = require('express');
const router = express.Router();

// Get controller news
const NewsController = require('../app/controllers/Newscontroller');

router.use('/:slug',NewsController.show);
router.use('/',NewsController.index);

module.exports = router;