import express from 'express';

const rotas = express.Router();

rotas.get('/alunos', buscaAlunos);
rotas.post('/aluno', inserir);
rotas.put('/aluno/:rm', alterar);
rotas.delete('/aluno/:rm', excluir);

export {rotas as default};
