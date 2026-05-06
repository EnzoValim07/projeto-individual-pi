var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/listar", function (req, res) {
    respostaController.listar(req, res);
});

module.exports = router;