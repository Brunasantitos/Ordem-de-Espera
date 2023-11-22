import express from "express";
import { especialidadeRouter } from './routes/especialidade.router.js';
import { senhaRouter } from './routes/senhas.router.js';
import { clinicaRouter } from "./routes/clinica.router.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTES
app.use('/api/v1/especialidade', especialidadeRouter);
app.use('/api/v1/senha', senhaRouter);
app.use('/api/v1/clinica', clinicaRouter);


app.listen(3000, () => {
    console.log('API rodando no url http://localhost:3000');
});