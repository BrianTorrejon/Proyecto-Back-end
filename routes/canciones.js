const express = require("express")
const router = express.Router();
const { vistaCanciones, vistaUnaCancion, crearCancion, editarCancion, eliminarCancion, cancionesDeUnAlbum } = require("../controller/controller");
const { validarId, validarAlbum, validarAlbumVacio, validarAlbumEnBody } = require("../middleware/validaciones")
const { cancionChecks } = require("../middleware/cancionChecks")

router.get("/ver", vistaCanciones);
router.get("/ver/:id", validarId, vistaUnaCancion);
router.get("/buscarCanciones/:nameAlbum", validarAlbum, validarAlbumVacio, cancionesDeUnAlbum);
router.post('/crear', cancionChecks, validarAlbumEnBody, crearCancion)
router.put("/editar/:id", validarId, cancionChecks, validarAlbumEnBody, editarCancion)
router.delete("/eliminar/:id", validarId, eliminarCancion)

module.exports = router;
