const { check } = require('express-validator');

exports.validateMovie = [
    check('name').not().isEmpty().withMessage('Name is Required'),
    check('language').not().isEmpty().withMessage('Language is Required'),
    check('description').not().isEmpty().withMessage('Description is Required'),
    check('releaseDate').not().isEmpty().withMessage('Release date is Required'),
    check('trailerUrl').not().isEmpty().withMessage('Trailer URL is Required'),
    check('posterUrl').not().isEmpty().withMessage('Poster URL is Required'),
    check('genres').not().isEmpty().withMessage('Genres is Required'),
]