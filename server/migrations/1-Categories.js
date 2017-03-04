'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
            return queryInterface.createTable('Categories',            {
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
                        "isAlpha": true
                    }
                },
                "createdAt": {
                   type: Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    type: Sequelize.DATE,
                    "allowNull": false
                }
            })

    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Categories');
    }
};