import { cadastrarUsuario, listarUsuarios } from "../modules/usuarioService.js";
import { type Request, type Response } from "express";

export async function cadastrarUsuarioController (req: Request, res: Response) {
    const { nome, email, telefone } = req.body;
    const usuario = await cadastrarUsuario (nome, email, telefone);
    res.json(usuario);
    }

export async function listarUsuariosController (req: Request, res: Response) {
    const todosUsuarios = await listarUsuarios ()
    res.json(todosUsuarios);
}