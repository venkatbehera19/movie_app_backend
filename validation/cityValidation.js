const { check } = require('express-validator');
const City = require('../models/City');

exports.validateCity = [
    check('name', "City Name is Required")
    .not()
    .isEmpty()
    .custom( async(name) => {
        const existingCity = await City.findOne({ name }) || {};
        if(existingCity.name === name.toLowerCase()){
            throw new Error("Name can't be Duplicate")
        }
    })
]