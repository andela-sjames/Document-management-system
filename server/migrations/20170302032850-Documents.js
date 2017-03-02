'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('Documents',
            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "comment": {
                    "type": "Document Model defined"
                },
                "title": {
                    "type": "VARCHAR(255)",
                    "allowNull": false,
                    "validate": {
                        "isAlpha": true,
                        "notEmpty": {
                            "msg": "Field should not be empty"
                        }
                    }
                },
                "content": {
                    "type": "TEXT",
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "Field should not be empty"
                        }
                    }
                },
                "isPrivate": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "CategoryId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "Categories",
                        "key": "id"
                    },
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE"
                },
                "UserId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE"
                },
                "userId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE"
                }
            })
        })

        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('Documents');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};