import mongoose from "mongoose";
export const connectDataBase = () => {
    const dbUrl = process.env.dbUrl;
    mongoose.connect(dbUrl);
    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Erro a conectar com o mongoDB");   
    })

    connection.on("open", () => {
        console.log("Conectado com o mongoDB");   
    })

}