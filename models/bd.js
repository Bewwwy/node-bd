import mysql, { createConnection } from 'mysql2';

const mysql = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola',
});

conexao.connect((error) => {
    if(error) throw error;
    console.log('Conectado com sucesso!');
});

export default conexao;