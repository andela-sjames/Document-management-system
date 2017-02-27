'use strict';
module.exports = function(sequelize, DataTypes) {
  var Document = sequelize.define('Document', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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