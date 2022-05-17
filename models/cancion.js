const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true
    },
    fechaLanzamiento: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    }
});
const Cancion = mongoose.model('Cancion', storeSchema);

module.exports = { Cancion }