'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
      {
        "name":"star1",
        "email":"star1",
        "password":"starwhite",
        "phone":"12345",
        "avatar":"noo",
        "level":"ado"
      }
     
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User',{},null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
