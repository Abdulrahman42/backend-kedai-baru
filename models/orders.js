'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.belongsTo(models.menus),
    orders.belongsTo(models.transactions);
  };
  return orders;
};