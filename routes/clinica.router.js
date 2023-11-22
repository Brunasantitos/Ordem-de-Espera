import express from "express"
import { deletarClinica, criarClinica, listarClinica } from '../controllers/clinica.controller.js';

export const clinicaRouter = express.Router();

clinicaRouter.post('/criar/clinica', criarClinica);

clinicaRouter.get('/listar/clinica', listarClinica);

clinicaRouter.delete('/deletar/clinica/:clinicaId', deletarClinica);


