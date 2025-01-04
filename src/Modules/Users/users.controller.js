import { Router } from "express";
import signupRouter from "./Services/signup.service.js";
import * as getUser from "./Services/get-users.service.js";
import loginRouter from "./Services/login.service.js";
import updateUserRouter from "./Services/update-user.service.js";
import deleteUserRouter from "./Services/delete-user.service.js";
import getUserNotesRouter from "./Services/get-user-notes.service.js";

const userRouters = Router();

userRouters.post("/signup", signupRouter)
userRouters.post("/login", loginRouter)
userRouters.get("/get-users", getUser.getAllUserRoute)
userRouters.get("/get-user/:id", getUser.getUserByIdRouter)
userRouters.get("/get-user-notes/:id", getUserNotesRouter)
userRouters.patch("/update-user/:id", updateUserRouter)
userRouters.delete("/delete-user/:id", deleteUserRouter)

export default userRouters