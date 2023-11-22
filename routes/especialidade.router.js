import express from "express";
import {
    listarEspecialidade,
    criarEspecialidade,
    deletarEspecialidade
} from "../controllers/especialidade.controller.js";

export const especialidadeRouter = express.Router();

especialidadeRouter.get("/list", listarEspecialidade);
especialidadeRouter.delete('/delete/:id', deletarEspecialidade);
especialidadeRouter.post('/create', criarEspecialidade);

