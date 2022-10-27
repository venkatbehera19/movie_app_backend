const express = require('express');
const moviesTimingsController = require('../controllers/moviesTimingController');
const managerAuth = require('../middleware/managerAuth');
const { validateMovieTimings } = require('../validation/movieTimingValidation');
const router = express.Router();

router.post('/', validateMovieTimings, managerAuth, moviesTimingsController.create);
router.delete('/:id', managerAuth, moviesTimingsController.delete);

module.exports = router;