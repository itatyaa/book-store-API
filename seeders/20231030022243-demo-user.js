'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nama: 'Chandra',
      alamat: 'bandung',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'arga',
      alamat: 'garut',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'jaya',
      alamat: 'tasik',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'alfarel',
      alamat: 'subang',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
