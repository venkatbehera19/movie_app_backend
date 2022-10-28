const { check } = require('express-validator');
const MovieWithHall = require('../models/MovieWithHall');

exports.validateAddHall = [
    check('movies_id').not().isEmpty().withMessage('Movie is Required')
        .custom(async (movies_id, { req }) => {
            const hallId = req.body.hall_id;
            const isMovieAlreadyPresentInHall = await MovieWithHall.find({ movies_id,hall_id:hallId });
            if (isMovieAlreadyPresentInHall.length) {
                throw new Error("Movie is already added")
            }
        }),
    check('hall_id').not().isEmpty().withMessage('Hall is Required'),
]