const createOnboard = require('./onboard-manager');
const approveManager = require('./approve-manager');
const getAllHall = require('./get-all-hall');
const addMoviesToHall = require('./add-movies-to-hall');
const deleteMovies = require('./delete-movies-from-hall');
const getAllOnBoardmanager = require('./get-onboard-manager');
module.exports = {
    paths : {
        '/onboard' : {
            ...createOnboard,
            ...getAllOnBoardmanager
        },
        '/onboard/{id}' : {
            ...approveManager
        },
        '/hall/all/{id}' : {
            ...getAllHall
        },
        '/movies-to-hall' : {
            ...addMoviesToHall
        },
        '/movies-to-hall/{id}' : {
            ...deleteMovies
        }
    }
}