'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'menus',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      transactionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'transactions',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};