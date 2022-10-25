const express = require('express');
const moviesTimingsController = require('../controllers/moviesTimingController');
const router = express.Router();

router.post('/', moviesTimingsController.create);

module.exports = router;