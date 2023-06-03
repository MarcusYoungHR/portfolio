"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex("Progresses", {
      fields: ["taskId", "date"],
      unique: true,
      name: "taskDate_unique",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("Progresses", "taskDate_unique");
  },
};
