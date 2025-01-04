import NoteModel from "../../../DB/Models/note.model.js";

const deleteNoteRouter = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const note = await NoteModel.findByPk(id);
        if (!note)
            return res.status(404).json({
                message: "Note id note found.."
            })
        await NoteModel.destroy({
            where: { id }
        })
        res.status(200).json({
            message: "Note deleted successfully.."
        })
    } catch (error) {
        res.status(500).json({
            error: "Server error... try later",
        });
        console.log("error", error);

    }
}

export default deleteNoteRouter