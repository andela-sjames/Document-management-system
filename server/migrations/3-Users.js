'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('Users',            {
                "id": {
                    type: Sequelize.INTEGER,
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "username": {
                    type: Sequelize.STRING,
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "firstName": {
                    type: Sequelize.STRING,
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "lastName": {
                    type: Sequelize.STRING,
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "email": {
                   type: Sequelize.STRING,
                    "allowNull": false,
                    "validate": {
                        "isEmail": {
                            "msg": "field type should be email"
                        },
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "passwordHash": {
                   type: Sequelize.STRING,
                    "allowNull": false,
                    "len": {
                        "args": [
                            4,
                            100
                        ],
                        "msg": "Must not be less than 4 characters"
                    },
                    "isAlphanumeric": {
                        "msg": "Password should contain letters and numbers"
                    }
                },
                "createdAt": {
                    type: Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    type: Sequelize.DATE,
                    "allowNull": false
                },
                "RoleId": {
                    type: Sequelize.INTEGER,
                    "allowNull": true,
                    "references": {
                        "model": "Roles",
                        "key": "id"
                    },
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE"
                }
            })

    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};