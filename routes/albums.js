const express = require("express")
const router = express.Router();
const { vistaUnAlbum, crearAlbum, vistaAlbums, editarAlbum, eliminarAlbum } = require("../controller/controllerAlbum");
const { validarIdAlbum } = require("../middleware/validaciones")
const { albumChecks } = require("../middleware/albumChecks");

router.get("/ver", vistaAlbums);
router.get("/ver/:id", validarIdAlbum, vistaUnAlbum);
router.post('/crear', albumChecks, crearAlbum)
router.put("/editar/:id", validarIdAlbum, albumChecks, editarAlbum)
router.delete("/eliminar/:id", validarIdAlbum, eliminarAlbum)

module.exports = router;