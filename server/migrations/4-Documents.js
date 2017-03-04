'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('Documents',            {
                "id": {
                    type: Sequelize.INTEGER,
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "title": {
                    type: Sequelize.STRING,
                    "allowNull": false,
                    "validate": {
                        "isAlpha": true,
                        "notEmpty": {
                            "msg": "Field should not be empty"
                        }
                    }
                },
                "content": {
                    type: Sequelize.STRING,
                    "allowNull": false,
                    "validate": {
                        "notEmpty": {
                            "msg": "Field should not be empty"
                        }
                    }
                },
                "isPrivate": {
                    type: Sequelize.STRING,
                    "allowNull": false
                },
                "createdAt": {
                    type: Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    type: Sequelize.DATE,
                    "allowNull": false
                },
                "CategoryId": {
                    type: Sequelize.INTEGER,
                    "allowNull": true,
                    "references": {
                        "model": "Categories",
                        "key": "id"
                    },
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE"
                },
                "UserId": {
                    type: Sequelize.INTEGER,
                    "allowNull": true,
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE"
                }
            })

    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Documents');
    }
};