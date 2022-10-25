const express = require('express');
const moviesWithHallController = require('../controllers/moviesWithHallController');
const managerAuth = require('../middleware/managerAuth');
const { validateAddHall } = require('../validation/addMoviesToHall');
const router = express.Router();

router.post('/', validateAddHall, managerAuth , moviesWithHallController.addMovieToHall);
router.delete('/:id', managerAuth, moviesWithHallController.deleteMovieFormHall);

// get all the Movies that related to perticular cinema Hall
router.get('/:id', moviesWithHallController.getAllMoviesByCinemaHall)

module.exports = router;