import { Model, InferAttributes, InferCreationAttributes, CreationOptional, QueryInterface } from 'sequelize';
import sequelize from '../providers/db';
import { DataTypes } from 'sequelize';

interface RequestUserModel extends Model<InferAttributes<RequestUserModel>, InferCreationAttributes<RequestUserModel>> {
    id: CreationOptional<string>,
    userID: string,
    groupID: string,
}

const RequestUser = sequelize.define<RequestUserModel>('RequestUser', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    userID: {
        type: DataTypes.UUID
    },
    groupID: {
        type: DataTypes.UUID
    },
}, {
    tableName: 'RequestsUsers',
    updatedAt: false,
});

export default RequestUser;

export {
    RequestUserModel,
    RequestUser,
};
