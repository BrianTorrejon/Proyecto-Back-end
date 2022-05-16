const { Cancion } = require('../models/model')
const {Album} = require('../models/album')

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaCanciones = async (req, res) => {
    const canciones = await Cancion.find()
    res.json({ canciones })
}

const crearCancion = async (req, res) => {
    try {
        const cancion = new Album(req.body);
        await cancion.save()
        res.status(201).json(cancion)
    } catch (err) {
        res.status(501).json({ msg: "no se puede huardar la cancion." })
    }

}

module.exports = { vistaUno, crearCancion, vistaCanciones }