"use strict";
module.exports = (sequelize, DataTypes) => {
  const bulletin = sequelize.define(
    "Bulletins",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  bulletin.associate = function (models) {
    // associations can be defined here
  };
  return bulletin;
};
