// Importação das bibliotecas usando ECMASCRIPTv6
import express from "express";
import cors from 'cors';
import rotas from './routes.js';
import bd from '../models/bd.js';

const server = express();
server.use(cors());

server.use('/', rotas);

server.listen(3000, () => {
    console.log('Servidor no ar');
});