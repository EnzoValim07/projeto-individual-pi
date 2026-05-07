var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

module.exports = router;