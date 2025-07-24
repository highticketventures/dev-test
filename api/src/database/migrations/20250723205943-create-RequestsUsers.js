module.exports = {
    up: (queryInterface, { DataTypes }) => queryInterface.createTable('RequestsUsers', {
        id: {  // Not used. Required by default mysql system var sql_require_primary_key
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        requestID: {
            type: DataTypes.UUID,
            references: {
                model: 'Requests',
                key: 'id',
            },
        },
        userID: {
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'id',
            },
        },

        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }).then(() => queryInterface.addConstraint('RequestsUsers', {
        fields: ['requestID', 'userID'],
        type: 'unique',
        name: 'requestID_userID_index'
    })),
    down: (queryInterface) => queryInterface.dropTable('RequestsUsers'),
};