'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Role, {
          onDelete: 'CASCADE',
          as:'Role',
          foreignKey: {
            allowNull: false
          }
        });

        User.hasMany(models.Document, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return User;
};