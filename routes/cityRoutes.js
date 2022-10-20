const express = require('express');
const cityController = require('../controllers/cityController');
const { validateCity } = require('../validation/cityValidation');
const router = express.Router();

router.post('/', validateCity , cityController.createCity);
router.get('/', cityController.getAllCity);
router.get('/:id' , cityController.getACity);
router.delete('/:id' , cityController.deleteCity);
router.put('/:id', validateCity , cityController.updateCity);

module.exports = router;