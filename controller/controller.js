const { Cancion } = require('../models/model')
const { Album } = require('../models/album')

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaUnaCancion = async (req, res) => {
    const cancion = await Cancion.findById(req.params.id)
    res.json({ cancion })
}


const vistaCanciones = async (req, res) => {
    const canciones = await Cancion.find()
    res.json({ canciones })
}

const crearCancion = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const cancion = new Cancion(req.body);
            await cancion.save()
            res.status(201).json({ cancion, msg: "Creado exitosamente" })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({ msg: "no se puede huardar la cancion." })
    }

}

const editarCancion = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const { id } = req.params
            await Cancion.findByIdAndUpdate(id, req.body)
            res.status(202).json({ msg: "Se actualizo correctamente" })
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({ msg: "No se puedo actualizar" })
    }
}

const eliminarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndDelete(req.params.id)
        res.json({ msg: "adios", cancion })
    } catch (error) {
        res.status(400).json({ msg: "Problemas al borrar info." })
    }
}

module.exports = { vistaUnaCancion, crearCancion, vistaCanciones, editarCancion, eliminarCancion, vistaUno }