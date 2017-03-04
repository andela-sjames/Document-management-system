'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('Users',
            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "comment": {
                    "type": "User Model defined"
                },
                "username": {
                    "type": "VARCHAR(255)",
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "firstName": {
                    "type": "VARCHAR(255)",
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "lastName": {
                    "type": "VARCHAR(255)",
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "field should not be empty"
                        }
                    }
                },
                "email": {
                    "type": "VARCHAR(255)",
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
                    "type": "VARCHAR(255)",
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
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "RoleId": {
                    "type": "INTEGER",
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