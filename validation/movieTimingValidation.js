const { check } = require('express-validator');

exports.validateMovieTimings = [
    check('hall_id').not().isEmpty().withMessage('hall_id Can not be Empty'),
    check('movie_id').not().isEmpty().withMessage('movie_id Can not be Empty'),
    check('time').not().isEmpty().withMessage('time Can not be Empty'),
]