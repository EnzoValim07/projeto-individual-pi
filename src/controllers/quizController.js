var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var pontuacao = req.body.pontuacaoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (acertos == undefined) {
        res.status(400).send("Acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Erros está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Pontuação está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        quizModel.salvar(acertos, erros, pontuacao, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao salvar o resultado: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listar(req, res) {
    quizModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvar,
    listar
};