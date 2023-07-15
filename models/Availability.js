// models/Availability.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Table = require('./Table');

const Availability = sequelize.define('Availability', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  availableSlots: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Availability.belongsTo(Table, { foreignKey: 'tableId' });

module.exports = Availability;
