const express = require('express');
const moviesController = require('../controllers/moviesController');
const authorization = require('../middleware/authorization');
const { validateMovie } = require('../validation/movieValidation');
const router = express.Router();

router.post("/", validateMovie, authorization, moviesController.createMovies);
router.get("/:id", moviesController.getMovie);
router.delete("/:id",authorization, moviesController.deleteMovies);
router.put("/:id", validateMovie, authorization, moviesController.updateMovies);

module.exports = router;