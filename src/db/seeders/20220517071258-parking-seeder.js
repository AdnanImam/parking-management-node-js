'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


  await queryInterface.bulkInsert('parkings', [{
          level     : 'B1',
          slot      : 10,
          created_at: new Date(),
          updated_at: new Date()
      },{
          level     : 'B2',
          slot      : 12,
          created_at: new Date(),
          updated_at: new Date()
      },{
          level     : 'B3',
          slot      : 14,
          created_at: new Date(),
          updated_at: new Date()
      },{
          level     : 'B4',
          slot      : 16,
          created_at: new Date(),
          updated_at: new Date()
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
