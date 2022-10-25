const createCity = require('./create-city');

module.exports = {
    paths : {
        '/city' : {
            ...createCity
        }
    }
}