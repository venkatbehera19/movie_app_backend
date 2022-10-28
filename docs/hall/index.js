const createHall = require('./create-hall');
const getHall = require('./get-a-hall');
const deleteHall = require('./delete-a-hall');
const upadteHall = require('./update-a-hall');
const getAllHallByCity = require('./get-all-hall-by-city');
module.exports = {
    paths : {
        '/hall' : {
            ...createHall
        },
        '/hall/{id}' : {
            ...getHall,
            ...deleteHall,
            ...upadteHall
        },
        '/hall/city/{id}' : {
            ...getAllHallByCity
        }
    }
}