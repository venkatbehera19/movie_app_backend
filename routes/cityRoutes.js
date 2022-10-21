const express = require('express');
const cityController = require('../controllers/cityController');
const authorization = require('../middleware/authorization');
const { validateCity } = require('../validation/cityValidation');
const router = express.Router();

router.post('/', validateCity, authorization, cityController.createCity);
router.get('/', cityController.getAllCity);
router.get('/:id', cityController.getACity);
router.delete('/:id', authorization, cityController.deleteCity);
router.put('/:id', validateCity, authorization, cityController.updateCity);

module.exports = router;