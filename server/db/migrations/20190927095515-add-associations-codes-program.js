'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('codes', ['program_id'], {
      type: 'foreign key',
      name: 'codes_program_fkey_id',
      references: {
        table: 'Programs',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('codes', 'codes_program_fkey_id');
  },
};
