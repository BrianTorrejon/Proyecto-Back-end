const express = require('express');
const router = express.Router(); 
const { vistaCanciones, vistaUnaCancion, crearCancion, editarCancion, eliminarCancion } = require("../controller/controller");

/* GET users listing. */
router.get('/ver', vistaCanciones);
router.get('/ver/:id', vistaUnaCancion)
router.post('/crear', crearCancion);
router.put('/editar/:id', editarCancion)
router.delete("/eliminar/:id", eliminarCancion)


module.exports = router;
