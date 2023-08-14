const express = require("express");
const router = express.Router();
var controller = require("../controllers/controller");


router.get("/", controller.exibirTela);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });