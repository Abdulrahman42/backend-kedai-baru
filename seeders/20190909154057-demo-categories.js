'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     return queryInterface.bulkInsert('categories', [{
        name: 'food'
      },{
        name: 'drink'
      },{
        name: 'dessert'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
