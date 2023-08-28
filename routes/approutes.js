const express = require("express");
const router = express.Router();
var controller = require("../controllers/controller");


router.get("/", controller.index);
router.get("/maiorsal", controller.maiorsal);
router.get("/menorsal", controller.menorsal);
router.get("/admin", controller.admin);
router.get("/design", controller.design);
router.get("/contabil", controller.contabil);
router.get("/fabrica", controller.fabrica);
router.get("/busca", controller.busca);
router.get("/form", controller.form);
router.post("/form", controller.add);
router.get("/deleta/:id", controller.deleta);
router.get("/edita/:id", controller.edita);
router.post("/edita/:id", controller.atualiza)

module.exports = router;