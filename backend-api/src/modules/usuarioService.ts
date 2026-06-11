import pool from '../database/db.js';

export async function cadastrarUsuario (nome: string, email: string, telefone: string) {
    const resultCadastrar = await pool.query (
        'INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *', [nome, email, telefone]
    );
    return resultCadastrar.rows[0];
}
export async function listarUsuarios () {
    const resultListar = await pool.query (
        'SELECT * FROM usuarios'
    );
    return resultListar.rows;
}
export async function editarUsuario(id: string, nome: string, email: string, telefone: string) {
    const resultEditar = await pool.query(
        'UPDATE usuarios SET nome = $2, email = $3, telefone = $4 WHERE id = $1 RETURNING *', [id, nome, email, telefone]
    );
    return resultEditar.rows[0];
}