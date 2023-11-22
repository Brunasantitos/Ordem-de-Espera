import express from "express";
import {
    especialidadeList,
    createEspecialidade,
    deleteEspecialidade
} from "../controllers/especialidade.controller.js";

export const especialidadeRouter = express.Router();

especialidadeRouter.get("/list", especialidadeList);
especialidadeRouter.delete('/delete/:id', deleteEspecialidade);
especialidadeRouter.post('/create', createEspecialidade);

