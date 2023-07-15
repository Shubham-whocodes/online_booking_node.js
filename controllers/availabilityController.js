// controllers/availabilityController.js
const Availability = require('../models/Availability');

exports.updateAvailability = async (req, res) => {
  try {
    const { tableId, date, availableSlots } = req.body;

    // Find availability by tableId and date
    let availability = await Availability.findOne({ tableId, date });

    // If availability record doesn't exist, create a new one
    if (!availability) {
      availability = new Availability({ tableId, date, availableSlots });
    } else {
      // Update existing availability
      availability.availableSlots = availableSlots;
    }

    await availability.save();

    res.json({ message: 'Availability updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
