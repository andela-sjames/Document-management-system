'use strict';
module.exports = function(sequelize, DataTypes) {
  var Document = sequelize.define('Document', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    access: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Document.belongsTo(models.User, {
          as: 'User',
          onDelete: 'CASCADE',
          foreignKey: 'UserId'
        });

        Document.belongsTo(models.Category, {
          as: 'Category',
          onDelete: 'CASCADE',
          foreignKey: 'CategoryId'
        });

      }
    }
  });
  return Document;
};