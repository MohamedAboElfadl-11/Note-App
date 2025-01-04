import express from 'express'
import { db_connection } from './DB/connection.js'
import controllerHandler from './Utils/routers-handler.js'

const bootsrap = function () {

    const app = express()

    const PORT = 3000

    app.use(express.json())

    controllerHandler(app)

    db_connection()

    app.listen(PORT, () => {
        console.log("server running on port 3000")
    })
}

export default bootsrap;