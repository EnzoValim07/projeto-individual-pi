var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/buscar/:idUsuario", function (req, res) {
    perfilController.buscarPorUsuario(req, res);
});

router.post("/cadastrar/:idUsuario", function (req, res) {
    perfilController.cadastrar(req, res);
});

router.put("/editar/:idUsuario", function (req, res) {
    perfilController.editar(req, res);
});

module.exports = router;