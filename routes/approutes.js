const express = require("express");
const router = express.Router();
var controller = require("../controllers/controller");


router.get("/", controller.index);
router.get("/form", controller.form);
router.post("/form", controller.add);
router.get("/deleta/:id", controller.deleta);
router.get("/edita/:id", controller.edita);
router.post("/edita/:id", controller.atualiza)

module.exports = router;