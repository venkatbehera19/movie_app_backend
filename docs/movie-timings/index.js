const createMovieTimmings = require('./add-movie-timmings');
const deleteMovieTimmings = require('./delete-movie-timmings');

module.exports = {
    paths : {
        '/movie-timing' : {
            ...createMovieTimmings
        },
        '/movie-timing/{id}' : {
            ...deleteMovieTimmings
        }
    }
}