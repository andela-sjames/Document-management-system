'use strict';
module.exports = function(sequelize, DataTypes) {
  var Document = sequelize.define('Document', {
    comment: "Document Model defined",
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: {
          msg: 'Field should not be empty'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Field should not be empty'
        }
      }
    },
    isPrivate: {
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
          foreignKey: 'UserId' // field is available here by default
        });

        Document.belongsTo(models.Category, {
          as: 'Category',
          onDelete: 'CASCADE',
          foreignKey: 'CategoryId' // field is available here by default
        });
      }
    }
  });
  return Document;
};