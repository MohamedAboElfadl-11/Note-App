import notesRouters from "../Modules/Notes/notes.controller.js"
import userRouters from "../Modules/Users/users.controller.js"

const controllerHandler = (app) => {
    app.use("/user", userRouters)
    app.use("/note", notesRouters)

}
export default controllerHandler