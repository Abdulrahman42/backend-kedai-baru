'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    tableNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.STRING,
    subTotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    serviceCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    isPaid: DataTypes.BOOLEAN
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
    transactions.hasMany(models.orders)
  };
  return transactions;
};