const { check } = require('express-validator');
const MovieWithHall = require('../models/MovieWithHall');

exports.validateAddHall = [
    check('movies_id').not().isEmpty().withMessage('Movie is Required')
    .custom(async (movies_id) => {
        const isMovieAlreadyPresentInHall = await MovieWithHall.findOne({movies_id});
        if(isMovieAlreadyPresentInHall){
            throw new Error("Movie is already added")
        }
    }),
    check('hall_id').not().isEmpty().withMessage('Hall is Required'),
]