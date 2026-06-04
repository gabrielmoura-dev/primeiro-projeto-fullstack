import express from 'express';
import cors from 'cors';
import { handleController } from './src/controllers/helloController.js';

const app = express();
app.use(cors());
const port = 3000;

app.get('/hello', handleController);

app.get('/hello-json', (req, res) => {
    const testJson = {"hello": "world"};
    res.json(testJson);
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});