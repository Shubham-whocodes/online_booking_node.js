const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/search', bookingController.searchTables);
router.post('/', bookingController.createBooking);

module.exports = router;
