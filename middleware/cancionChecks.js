const {check} = require("express-validator")

const cancionChecks = [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre de la canción.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entr 1-30 caracteres."),
    check('autor').not().isEmpty().withMessage("Debe ingresar el nombre del autor de la canción."),
    check('fechaLanzamiento').not().isEmpty().withMessage("Ingresar fecha de lanzamiento de la canción."),
    check('album').not().isEmpty().withMessage("Debe ingresar nombre del album al que pertenece la canción."),
]

module.exports = {cancionChecks}