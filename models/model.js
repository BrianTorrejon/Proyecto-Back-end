const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});
const Cancion = mongoose.model('Cancion', storeSchema);

module.exports = {Cancion}