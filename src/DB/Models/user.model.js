import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const UserModel = sequelize.define('tbl_users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "idx_email_unique",
        comment: "email address",
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: true,
            isInt: true,
            min: 12
        }
    },
    gender: {
        type: DataTypes.ENUM("male", "female", "N/A"),
        allowNull: false,
        defaultValue: "N/A"
    }
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
    paranoid: true,
})

export default UserModel