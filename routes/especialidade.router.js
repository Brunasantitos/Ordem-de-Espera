import express from "express";
import {especialidadeList, createEspecialidade, deleteEspecialidade} from "../controllers/especialidade.controller.js";

const especialidadeRouter = express.Router();

especialidadeRouter.get("/list", especialidadeList);
especialidadeRouter.delete('/delete/:id', deleteEspecialidade);
especialidadeRouter.post('/create', createEspecialidade);


export default especialidadeRouter;