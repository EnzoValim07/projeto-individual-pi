var database = require("../database/config");

function listar() {
    console.log("ACESSEI O RESPOSTA MODEL - function listar()");
    var instrucaoSql = `
        SELECT id_resposta, descricao FROM respostaInicial;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};