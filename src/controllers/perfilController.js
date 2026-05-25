var perfilModel = require("../models/perfilModel");

function buscarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    perfilModel.buscarPorUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum perfil encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o perfil: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var bio = req.body.bioServer;
    var dataNascimento = req.body.dataNascimentoServer;
    var idUsuario = req.params.idUsuario;

    if (bio == undefined) {
        res.status(400).send("A bio está undefined!");
    } else if (dataNascimento == undefined) {
        res.status(400).send("A data de nascimento está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        perfilModel.cadastrar(bio, dataNascimento, idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao cadastrar o perfil: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function editar(req, res) {
    var bio = req.body.bioServer;
    var dataNascimento = req.body.dataNascimentoServer;
    var idUsuario = req.params.idUsuario;

    if (bio == undefined) {
        res.status(400).send("A bio está undefined!");
    } else if (dataNascimento == undefined) {
        res.status(400).send("A data de nascimento está undefined!");
    } else {
        perfilModel.editar(bio, dataNascimento, idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao editar o perfil: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarPorUsuario,
    cadastrar,
    editar
};