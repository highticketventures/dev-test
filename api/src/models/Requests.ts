import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../providers/db';
import { DataTypes } from 'sequelize';

interface RequestsModel extends Model<InferAttributes<RequestsModel>, InferCreationAttributes<RequestsModel>> {
    id: CreationOptional<string>,
    groupID: string,
    userID: string,

    status: 'Draft' | 'Submitted' | 'In Progress' | 'Reviewing' | 'Completed',
    title: string,
    body: string,

    createdAt: CreationOptional<string>,
    updatedAt: CreationOptional<string>,
}

const Requests = sequelize.define<RequestsModel>('Requests', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    groupID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Groups',
            key: 'id',
        },
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },

    status: {
        type: DataTypes.ENUM('Draft', 'Submitted', 'In Progress', 'Reviewing', 'Completed'),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'Requests',
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: [
                // Excluded properties
            ]
        }
    },
});

export default Requests;

export {
    RequestsModel,
    Requests,
};
