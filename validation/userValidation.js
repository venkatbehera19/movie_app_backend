const { check } = require('express-validator');
const User = require('../models/User');

exports.validateLoginUser = [

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email can not be empty')
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid Email')
        .custom(async (email) => {
            const existingUser = await User.findOne({ email })
            if (!existingUser) {
                throw new Error('UserName and Password Invalid.')
            }
        }),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password can not be empty')

]

exports.validateUser = [

    check('name')
        .not()
        .isEmpty()
        .withMessage("Name can't be empty"),

    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email can not be empty')
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid Email')
        .custom(async (email) => {
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                throw new Error('Email is already in Use')
            }
        }),

    check('password')
        .not()
        .isEmpty()
        .withMessage('Password can not be empty')
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1
        })
        .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),

    check('phone')
        .not()
        .isEmpty()
        .withMessage('PhoneNumber can not be empty'),

    check('role')
        .not()
        .isEmpty()
        .withMessage('Role is required')

]