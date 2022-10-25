const { check } = require('express-validator');
const UnboardManager = require('../models/UnboardManger');
const User = require('../models/User');

exports.validateOnBoard = [
    check('name').not().isEmpty().withMessage('Name is Required'),
    check('email').not().isEmpty().withMessage('email is Required').custom(async (email) => {
        const existingEmail = await UnboardManager.findOne({ email }) || {};
        if (existingEmail?.email?.toLowerCase() === email.toLowerCase()) {
            throw new Error("Email Id is already present");
        } else {
            const existingEmailUser = await User.findOne({ email }) || {};
            if (existingEmailUser?.email?.toLowerCase() === email.toLowerCase()) {
                throw new Error("You are an existing user.")
            }
        }
    }),
    check('password').not().isEmpty().withMessage('password is Required'),
    check('phone').not().isEmpty().withMessage('phone is Required'),
    check('address').not().isEmpty().withMessage('address is Required'),
    check('hallDetails').not().isEmpty().withMessage('hallDetails is Required'),
]