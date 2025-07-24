module.exports = {
    up: (queryInterface, { DataTypes }) => queryInterface.createTable('GroupsUsers', {
        id: {  // Not used. Required by default mysql system var sql_require_primary_key
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        groupID: {
            type: DataTypes.UUID,
            references: {
                model: 'Groups',
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
        role: {
            type: DataTypes.STRING,
            defaultValue: 'User',
            allowNull: false,
        },

        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }).then(() => queryInterface.addConstraint('GroupsUsers', {
        fields: ['groupID', 'userID'],
        type: 'unique',
        name: 'groupID_userID_index'
    })),
    down: (queryInterface) => queryInterface.dropTable('GroupsUsers'),
};