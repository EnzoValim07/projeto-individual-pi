var database = require("../database/config");

function salvar(acertos, erros, pontuacao, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar():", acertos, erros, pontuacao, idUsuario);

    var instrucaoSql = `
        INSERT INTO resultado_quiz (acertos, erros, pontuacao, fk_usuario)
        VALUES (${acertos}, ${erros}, ${pontuacao}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    console.log("ACESSEI O QUIZ MODEL - function listar()");

    var instrucaoSql = `
        SELECT 
            u.nome,
            r.acertos,
            r.erros,
            r.pontuacao,
            r.data_criacao
        FROM resultado_quiz r
        JOIN usuario u ON r.fk_usuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    listar
};