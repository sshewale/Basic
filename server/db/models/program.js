'use strict';
module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define(
    'Program',
    {
      account_id: DataTypes.INTEGER,
      program_name: DataTypes.STRING,
    },
    { updatedAt: 'db_updated_at', createdAt: 'db_created_at' },
  );
  Program.associate = function(models) {
    // associations can be defined here
    Program.hasOne(models.codes, {
      foreignKey: 'program_id',
    });
  };
  return Program;
};
