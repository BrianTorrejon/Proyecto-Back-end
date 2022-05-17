const { Album } = require('../models/album')
const { check, validationResult, body } = require("express-validator")

const vistaUnAlbum = async (req, res) => {
    const album = await Album.findById(req.params.id)
    res.json({ album })
}

const vistaAlbums = async (req, res) => {
    const albums = await Album.find()
    res.json({ albums })
}

const crearAlbum = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const album = new Album(req.body);
            await album.save()
            res.status(201).json({ album, msg: "Album creado exitosamente." })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({ msg: "No se puede crear el album." })
    }

}

const editarAlbum = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const { id } = req.params
            await Album.findByIdAndUpdate(id, req.body)
            res.status(202).json({ msg: "El album se actualizo correctamente." })
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({ msg: "No se puede actualizar." })
    }
}

const eliminarAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id)
        res.json({ msg: "Se elimino exitosamente el album", album })
    } catch (error) {
        res.status(400).json({ msg: "Problemas al borrar album." })
    }
}

module.exports = { vistaUnAlbum, crearAlbum, vistaAlbums, editarAlbum, eliminarAlbum }