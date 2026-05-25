var database = require("../database/config");

function cadastrar(bio, dataNascimento, idUsuario) {
    console.log("ACESSEI O PERFIL MODEL - function cadastrar():", bio, dataNascimento, idUsuario);

    var instrucaoSql = `
        INSERT INTO perfil (bio, data_nascimento, fk_usuario)
        VALUES ('${bio}', '${dataNascimento}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorUsuario(idUsuario) {
    console.log("ACESSEI O PERFIL MODEL - function buscarPorUsuario():", idUsuario);

    var instrucaoSql = `
        SELECT
            p.id,
            p.bio,
            p.data_nascimento,
            u.id AS idUsuario,
            u.nome,
            u.email
        FROM perfil p
            INNER JOIN usuario u
                ON p.fk_usuario = u.id
        WHERE p.fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(bio, dataNascimento, idUsuario) {
    console.log("ACESSEI O PERFIL MODEL - function editar():", bio, dataNascimento, idUsuario);

    var instrucaoSql = `
        UPDATE perfil
        SET bio = '${bio}', data_nascimento = '${dataNascimento}'
        WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarPorUsuario,
    editar
};