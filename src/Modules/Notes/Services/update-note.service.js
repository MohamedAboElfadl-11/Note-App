import NoteModel from "../../../DB/Models/note.model.js";

const updateNoteRouter = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { note_title, note_content, is_archived } = req.body;
        if (!note_content || !note_title || !is_archived) {
            return res.status(400).json({
                error: "Add what you need to update"
            })
        }
        const note = await NoteModel.findByPk(id)
        if (!note)
            return res.status(404).json({
                message: "Note id not found.."
            })

        await NoteModel.update({
            note_title,
            note_content,
            is_archived
        }, {
            where: { id }
        })
        const updatedNote = await NoteModel.findByPk(id)
        res.status(201).json({
            message: "Note updated successfully..",
            new_note: {
                note_title: updatedNote.note_title,
                note_content: updatedNote.note_content,
                is_archived: updatedNote.is_archived
            }
        })
    } catch (error) {
        res.status(500).json({
            error: "Server error... try later",
        });
        console.log("error", error);
    }

}

export default updateNoteRouter