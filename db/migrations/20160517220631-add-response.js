'use strict';

module.exports = {
    up(queryInterface, DataTypes) {
        return queryInterface.createTable(
            'Responses', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                text: DataTypes.STRING,
                attachments: DataTypes.ARRAY(DataTypes.JSON),
                date: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.fn('NOW')
                },
                userId: {
                    type: DataTypes.STRING,
                    references: {
                        model: 'Users',
                        key: 'id'
                  }
                }
            }
        );
    },

    down(queryInterface) {
        return queryInterface.dropTable('Topics');
    }
};
