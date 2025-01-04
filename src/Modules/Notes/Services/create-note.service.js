import NoteModel from "../../../DB/Models/note.model.js";

const createNoteRouter = async (req, res) => {
    try {
        const { note_title, note_content, user_id } = req.body
        if (!note_title || !note_content || !user_id) {
            return res.status(400).json({
                message: "All data must be required.."
            })
        }
        const note = await NoteModel.create({
            note_title,
            note_content,
            fk_user_id: user_id
        })
        res.status(201).json({
            message: "Note Created successfully...✅",
            note,
        });
    } catch (error) {
        res.status(500).json({
            error: "Server error... try later",
        });
        console.log("error", error);
    }
}

export default createNoteRouter;