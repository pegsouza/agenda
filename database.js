// yarn add pg - biblioteca para trabalhar com o postgress

const Pool = require('pg').Pool;
 
// Passos para banco de dados
// 1 - Abrir a conexão
// 2- Executar o comando SQL (consulta(query) ou manipulação (insert, update, delete))
// 3 - Fechar a conexão

const pool = new Pool ({
    user: 'ltywcfcisxpbpq',
    password: 'dea9ecc573a75dfba2a2754868b9214126f72ae379f6e6a38b5600ae63074c5d',
    host: 'ec2-52-202-22-140.compute-1.amazonaws.com',
    database: 'ddu50cr460sbd',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

const sql = `
    CREATE TABLE IF NOT EXISTS agenda 
    (
        ID serial primary key,
        compromisso varchar (200) not null,
        data date,
        realizado boolean
    )
`;

pool.query(sql, function (error,result){
    if(error)
        throw error
    console.log('tabela criada com sucesso!');
})

//INSERT

const sql_insert = `
    INSERT INTO agenda (compromisso, data, realizado)
        VALUES
            ('Manutenção do carro', '2020/03/21', true),            
`;