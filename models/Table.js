// models/Table.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Table = sequelize.define('Table', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Table;
