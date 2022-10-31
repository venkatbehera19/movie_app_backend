const createMovie = require('./create-movies');
const getAMovie = require('./get-a-movie');
const getAllMovie = require('./get-all-movies');
const deleteAMovie = require('./delete-a-movie');
const updateAMovie = require('./update-a-movie');
const getAllMoviesByCinemaHall = require('./get-all-movies-by-cinema-hall');
const getAllMoviesByCity = require('./get-all-movies-by-city');
module.exports = {
    paths : {
        '/movie' : {
            ...createMovie,
            ...getAllMovie
        },
        '/movie/{id}' : {
            ...getAMovie,
            ...deleteAMovie,
            ...updateAMovie
        },
        '/movies-to-hall/{id}' : {
            ...getAllMoviesByCinemaHall
        },
        '/movies-to-hall/city/{id}' : {
            ...getAllMoviesByCity
        }
    }
}