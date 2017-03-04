'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('Roles',
            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "comment": {
                    "type": "Role Model defined"
                },
                "title": {
                    "type": "VARCHAR(255)",
                    "allowNull": false,
                    "validate": {
                        "isAlpha": true
                    }
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                }
            })

    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Roles');
    }
};