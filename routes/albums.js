const express = require("express")
const router = express.Router();
const { check, validationResult, body } = require("express-validator");
const { vistaUnAlbum, crearAlbum, vistaAlbums, editarAlbum, eliminarAlbum } = require("../controller/controllerAlbum");
const { validarIdAlbum } = require("../middleware/validarId")

router.get("/ver", vistaAlbums);
router.get("/ver/:id", validarIdAlbum, vistaUnAlbum);
router.post('/crear', [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre del album.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entr 1-30 caracteres."),
    check('gender').not().isEmpty().withMessage("Debe ingresar el genero del album."),
    check('artist').not().isEmpty().withMessage("Ingresar el nombre del artista."),
    check('discografica').not().isEmpty().withMessage("Debe ingresar nombre de la discografica asociada al album."),
    check('year').not().isEmpty().withMessage("Debe ingresar el año en que se publico el album.")
], crearAlbum)
router.put("/editar/:id", validarIdAlbum, [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre de la canción.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entr 1-30 caracteres."),
    check('autor').not().isEmpty().withMessage("Debe ingresar el nombre del autor de la canción."),
    check('fechaLanzamiento').not().isEmpty().withMessage("Ingresar fecha de lanzamiento de la canción."),
    check('album').not().isEmpty().withMessage("Debe ingresar nombre del album al que pertenece la canción.")
], editarAlbum)
router.delete("/eliminar/:id", validarIdAlbum, eliminarAlbum)

module.exports = router;