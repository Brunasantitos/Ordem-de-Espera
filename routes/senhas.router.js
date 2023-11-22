import express from "express";
import {gerarSenha, listarSenhas, chamarPromixaSenha } from "../controllers/senha.controller.js";

export const senhaRouter = express.Router();

senhaRouter.post('/gerar/senha', gerarSenha );
senhaRouter.get('/proxima/senha', chamarPromixaSenha);
senhaRouter.get('/listar/senhas', listarSenhas);
