import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('HELLO WORLD')
});
app.get('/hello-json', (req, res) => {
    const testJson = {"hello": "world"};
    res.json(testJson);
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});