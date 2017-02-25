'use strict';
module.exports = function(sequelize, DataTypes) {
  var Documents = sequelize.define('Documents', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    access: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Documents;
};