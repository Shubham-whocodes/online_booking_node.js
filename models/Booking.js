// models/Booking.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./User');
const Table = require('./Table');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

Booking.belongsTo(User, { foreignKey: 'userId' });
Booking.belongsTo(Table, { foreignKey: 'tableId' });

module.exports = Booking;
