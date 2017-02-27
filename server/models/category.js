'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
   title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.hasMany(models.Document, {
          foreignKey: 'CategoryId'
        })
      }
    }
  });
  return Category;
};