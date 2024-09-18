console.log("Meu servidor está funcionando com exito")

import { module } from "./module.js"

var texto = module(" [ Este é o texto que coloquei no servidor ] ");
console.log(texto);

// importando bibliotecas
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import testRouter from "./Routers/TesteRoute.js";
import productrouter from "./Routers/ProductRouter.js";
import { connectDataBase } from "./Config/Database.js";
import { config } from "dotenv";
config();

// procurando arquivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// criando um servidor express
const app = express();
const port = process.env.PORT || 4444;

//permitindo backend usar json
app.use(express.json());

//colocando rota em uso
app.use("/exemplo", testRouter);
app.use("/products", productrouter);

//servindo uma pagina no html
app.use(express.static(path.join(__dirname, "public")));

// ligando o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})

connectDataBase();

