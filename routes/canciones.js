const express = require("express")
const router = express.Router();
const { check, validationResult, body } = require("express-validator");
const { vistaCanciones, vistaUnaCancion, crearCancion, editarCancion, eliminarCancion, cancionesDeUnAlbum } = require("../controller/controller");
const { validarId, validarAlbum, validarAlbumVacio } = require("../middleware/validaciones")

router.get("/ver", vistaCanciones);
router.get("/ver/:id", validarId, vistaUnaCancion);
router.get("/buscarCanciones/:nameAlbum", validarAlbum, validarAlbumVacio, cancionesDeUnAlbum);
router.post('/crear', [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre de la canción.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entr 1-30 caracteres."),
    check('autor').not().isEmpty().withMessage("Debe ingresar el nombre del autor de la canción."),
    check('fechaLanzamiento').not().isEmpty().withMessage("Ingresar fecha de lanzamiento de la canción."),
    check('album').not().isEmpty().withMessage("Debe ingresar nombre del album al que pertenece la canción."),
], crearCancion)
router.put("/editar/:id", validarId, [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre de la canción.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entr 1-30 caracteres."),
    check('autor').not().isEmpty().withMessage("Debe ingresar el nombre del autor de la canción."),
    check('fechaLanzamiento').not().isEmpty().withMessage("Ingresar fecha de lanzamiento de la canción."),
    check('album').not().isEmpty().withMessage("Debe ingresar nombre del album al que pertenece la canción.")
], editarCancion)
router.delete("/eliminar/:id", validarId, eliminarCancion)

module.exports = router;
