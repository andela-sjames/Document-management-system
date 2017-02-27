'use strict';
module.exports = function(sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    comment: "Role Model defined",
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Role.hasMany(models.User, {
          foreignKey: 'RoleId'
        })
      }
    }
  });
  return Role;
};