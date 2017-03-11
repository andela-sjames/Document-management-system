'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "field should not be empty"
        },
      },
    },
    firstName:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "field should not be empty"
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "field should not be empty"
        },
      },
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: {
          msg: "field type should be email"
        },
        notEmpty: {
          msg: "field should not be empty"
        },
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
          args: [4, 100],
          msg: 'Must not be less than 4 characters'
        },
      isAlphanumeric: {
        msg: 'Password should contain letters and numbers'
      },
    }
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
          foreignKey: 'UserId'
        });
      }
    },

     instanceMethods: {
        verifyPassword(clearTextPassword) {
          return bcrypt.compareSync(clearTextPassword, this.passwordHash);
        },

        hashPassword() {
          this.passwordHash = bcrypt.hashSync(this.passwordHash, bcrypt.genSaltSync(10));
      }
     },

     hooks: {
       beforeCreate(user) {
         user.hashPassword();
         next();
       },

       beforeUpdate(user) {
        if (user._changed.passwordHash) {
          user.hashPassword();
        }
      }

     }
  });
  return User;
};