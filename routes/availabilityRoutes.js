// routes/availabilityRoutes.js
const express = require('express');
const router = express.Router();
const availabilityController = require('../controllers/availabilityController');

router.put('/:id', availabilityController.updateAvailability);

module.exports = router;
