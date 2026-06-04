import getHelloMessage from '../modules/helloService.js';
import type { Request, Response } from 'express'; // é necessário adicionar o "type" para que o "Request e Response" funcionem

export function handleController (req: Request, res: Response) {
    const mensagem = getHelloMessage(); // preciso criar uma variável para receber o conteúdo da função getHelloMenssage
    res.send(mensagem);
}

