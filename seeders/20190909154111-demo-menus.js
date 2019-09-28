'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('menus', [{
      name: 'Nasi Goreng',
      price: 10000,
      categoryId: 1,
      image: 'https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-nasi-goreng-telur.jpg'
    },{
      name: 'Bakso',
      price: 8000,
      categoryId: 1,
      image: 'https://img.okezone.com/content/2019/08/12/298/2090748/masih-simpan-daging-kurban-yuk-dibikin-jadi-bakso-sapi-lezat-3Q5Ap429OQ.jpg'
    },{
      name: 'Peanut Butter',
      price: 25000,
      categoryId: 2,
      image: 'https://pinchofyum.com/wp-content/uploads/peanut-butter-pie-shooters-3.jpeg'
    },{
      name: 'Pudding',
      price: 30000,
      categoryId: 3,
      image: 'https://cdn1-production-images-kly.akamaized.net/lxhLeq--A5X4wuy-nlZIMQMD_VE=/680x383/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2417635/original/020201500_1542889604-puding-coklat-lezat-saus-fla.jpg'
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
