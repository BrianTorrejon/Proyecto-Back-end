const { check } = require("express-validator")

const albumChecks = [
    check('name').not().isEmpty().withMessage("Debe ingresar el nombre del album.").isLength({ max: 30, min: 1 }).withMessage("Debe tener entr 1-30 caracteres."),
    check('gender').not().isEmpty().withMessage("Debe ingresar el genero del album."),
    check('artist').not().isEmpty().withMessage("Ingresar el nombre del artista."),
    check('discografica').not().isEmpty().withMessage("Debe ingresar nombre de la discografica asociada al album."),
    check('year').not().isEmpty().withMessage("Debe ingresar el año en que se publico el album.").isInt().withMessage("Debe ingresar un numero entero de 4 digitos.").isLength({ min: 4, max: 4 }).withMessage("Ingrese un año de 4 cifras")

]

module.exports = { albumChecks }