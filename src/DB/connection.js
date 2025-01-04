import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('db_notes_app', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    logging: (msg) => console.log('Database query is: ' + msg),
})

export const db_connection = async () => {
    try {
        await sequelize.sync({ alter: true })
        console.log("Connected to database successfully..✅")
    } catch (error) {
        console.log("Failed to connect to databse...", error)
    }
}

