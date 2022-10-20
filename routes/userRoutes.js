const express = require('express');
const userController = require('../controllers/userController');
const { validateUser, validateLoginUser } = require('../validation/userValidation');
const router = express.Router();

router.post('/signup', validateUser , userController.createUser);
router.post('/signin', validateLoginUser , userController.loginUser);

module.exports = router;