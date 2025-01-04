import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import UserModel from "./user.model.js";

const NoteModel = sequelize.define('tbl_notes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    note_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    note_content: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
    paranoid: true,
})

// user have many notes
UserModel.hasMany(NoteModel, {
    foreignKey: "fk_user_id", onUpdate: "CASCADE", onDelete: "CASCADE",
})
// note belongs to one user
NoteModel.belongsTo(UserModel, {
    foreignKey: "fk_user_id"
})
export default NoteModel
