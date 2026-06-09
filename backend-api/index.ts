import express from 'express';
import cors from 'cors';
import { handleController } from './src/controllers/helloController.js';
import pool from './src/database/db.js'
import { cadastrarUsuarioController } from './src/controllers/usuarioController.js';

// Config do app
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
// Rotas
app.get('/hello', handleController);
app.get('/hello-json', (req, res) => {
    const testJson = {"hello": "world"};
    res.json(testJson);
})
// POST
app.post('/usuarios', cadastrarUsuarioController);

// Conexão com o banco
pool.query('SELECT 1')
    .then(() => console.log('Banco de dados conectado!'))
    .catch((err) => console.log('Erro ao conectar com o banco:', err));
// Servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});