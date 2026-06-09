import pool from '../database/db.js';

export async function cadastrarUsuario (nome: string, email: string, telefone: string) {
    const result = await pool.query (
        'INSERT INTO usuarios (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *', [nome, email, telefone]
    );
    return result.rows[0];
}