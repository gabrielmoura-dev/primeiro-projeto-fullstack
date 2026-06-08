import express from 'express';
import cors from 'cors';
import { handleController } from './src/controllers/helloController.js';
import pool from './src/database/db.js'

const app = express();
app.use(cors());
const port = 3000;

app.get('/hello', handleController);

app.get('/hello-json', (req, res) => {
    const testJson = {"hello": "world"};
    res.json(testJson);
})

pool.query('SELECT 1')
    .then(() => console.log('Banco de dados conectado!'))
    .catch((err) => console.log('Erro ao conectar com o banco:', err));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});