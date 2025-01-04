import NoteModel from "../../../DB/Models/note.model.js";
import UserModel from "../../../DB/Models/user.model.js";

const getUserNotesRouter = async (req, res) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ message: "Invalid user ID provided" });
        }
        const user = await UserModel.findByPk(id)
        console.log(user)
        if (!user)
            return res.status(404).json({
                message: "User id note found"
            })
        const userNotes = await NoteModel.findAll(
            {
                where: { fk_user_id: id }
            }
        )
        if (userNotes.length === 0)
            return res.status(401).json({
                message: "You don't have notes.. go to notes and create"
            })
        res.status(201).json({
            message: "Your notes",
            note_count: userNotes.length,
            userNotes
        })
    } catch (error) {
        res.status(500).json({
            error: "Server error... try later",
        });
        console.log("error", error);
    }
}
export default getUserNotesRouter