const createCity = require('./create-city');
const getACity = require('./get-a-city');
const getAllCity = require('./get-all-city');
const deleteACity = require('./delete-a-city');
const updateACity = require('./update-a-city');

module.exports = {
    paths : {
        '/city' : {
            ...createCity,
            ...getAllCity
        },
        '/city/{id}' : {
            ...getACity,
            ...deleteACity,
            ...updateACity
        }
    }
}