import { Router } from "express";
import createNoteRouter from "./Services/create-note.service.js";
import updateNoteRouter from "./Services/update-note.service.js";
import deleteNoteRouter from "./Services/delete-note.service.js";

const notesRouters = Router()

notesRouters.post("/create-note", createNoteRouter)
notesRouters.patch("/update-note/:id", updateNoteRouter)
notesRouters.delete("/delete-note/:id", deleteNoteRouter)

export default notesRouters