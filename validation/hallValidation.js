const { check } = require('express-validator');

exports.validateHall = [
    check('name').not().isEmpty().withMessage('Name Can not be Empty'),
    check('address').not().isEmpty().withMessage('address Can not be Empty'),
    check('city').not().isEmpty().withMessage('city Can not be Empty'),
    check('manager').not().isEmpty().withMessage('manager Can not be Empty'),
]