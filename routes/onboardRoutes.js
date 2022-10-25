const express = require('express');
const onboardController = require('../controllers/onboardController');
const authorization = require('../middleware/authorization');
const { validateOnBoard } = require('../validation/onboardValidation');
const router = express.Router();

router.post('/', validateOnBoard, onboardController.onBoardManager);
router.post('/:id', authorization, onboardController.acceptManagerByAdmin)

module.exports = router;