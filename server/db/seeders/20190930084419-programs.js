'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let programsArr = [];
    // let programsFileData = fs.readFileSync('./db/seed-programs.json', 'utf8');
    // let programsJsonData = JSON.parse(programsFileData);
    let programsJsonData = {
      programs: [
        {
          id: 1,
          name: 'abc',
        },
      ],
    };
    programsJsonData.programs.forEach((program) => {
      let row = {
        account_id: '1',
        program_name: program,
        db_created_at: new Date(),
        db_updated_at: new Date(),
      };
      programsArr.push(row);
    });
    return queryInterface.bulkInsert('Programs', programsArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Programs', null, {});
  },
};
