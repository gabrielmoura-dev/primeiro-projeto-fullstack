import { cadastrarUsuario, listarUsuarios, editarUsuario } from "../modules/usuarioService.js";
import { type Request, type Response } from "express";

export async function cadastrarUsuariosController (req: Request, res: Response) {
    const { nome, email, telefone } = req.body;
    const resultCadastrarUsuarios = await cadastrarUsuario (nome, email, telefone);
    res.json(resultCadastrarUsuarios);
    }
export async function listarUsuariosController (req: Request, res: Response) {
    const resultListarUsuarios = await listarUsuarios ();
    res.json(resultListarUsuarios);
}
export async function editarUsuariosController (req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const { nome, email, telefone} = req.body;
    const resultEditarUsuarios = await editarUsuario (id, nome, email, telefone);
    res.json(resultEditarUsuarios);
}