import { cadastrarUsuario } from "../modules/usuarioService.js";
import { type Request, type Response } from "express";

export async function cadastrarUsuarioController (req: Request, res: Response) {
    const { nome, email, telefone } = req.body;
    const usuario = await cadastrarUsuario (nome, email, telefone);
    res.json(usuario);
    }