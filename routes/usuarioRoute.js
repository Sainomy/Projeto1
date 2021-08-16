const express = require("express");
const router = express();
var usuarioController = require("../controller/usuarioController");

//CREATE
router.get("/add", usuarioController.abreAdd);
router.post("/add", usuarioController.add);

//READ
router.get("/", usuarioController.listar);
router.post("/", usuarioController.listarFiltro);

//UPDATE
router.get("/edit/:id", usuarioController.abreEdt);
router.post("/edit/:id", usuarioController.edt);

//DELETE
router.get("/del/:id", usuarioController.del);

module.exports = router;





