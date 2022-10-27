const express = require('express');
const cinemaHallController = require('../controllers/cinemaHallController');
const authorization = require('../middleware/authorization');
const managerAuth = require('../middleware/managerAuth');
const { validateHall } = require('../validation/hallValidation');
const router = express.Router();

// CRUD for Hall
router.post('/', validateHall, managerAuth, cinemaHallController.create);
router.get('/:id', cinemaHallController.getHall);
router.delete('/:id', managerAuth, cinemaHallController.deleteHall);
router.put('/:id', validateHall, managerAuth, cinemaHallController.updateHall);

// Manager
router.get('/all/:id', authorization, cinemaHallController.getAllHallByManager)

// User 
router.get('/city/:id', cinemaHallController.getAllHallByCity)
module.exports = router;