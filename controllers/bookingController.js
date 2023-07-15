
const Booking = require('../models/Booking');

exports.searchTables = async (req, res) => {
  try {
    const { date, capacity } = req.query;

    // Find available tables based on date and capacity
    const availableTables = await Availability.find({
      date,
      availableSlots: { $gte: capacity },
    }).populate('tableId', 'name capacity');

    res.json(availableTables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const { userId, tableId, date, startTime, endTime } = req.body;

    // Check if the table is available for the given date and time
    const availability = await Availability.findOne({
      tableId,
      date,
      availableSlots: { $gte: 1 },
    });

    if (!availability) {
      return res.status(400).json({ message: 'Table not available' });
    }

    // Decrease availableSlots count
    availability.availableSlots--;

    // Create a new booking
    const newBooking = new Booking({
      userId,
      tableId,
      date,
      startTime,
      endTime,
    });

    await Promise.all([newBooking.save(), availability.save()]);

    res.json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
