const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    discografica: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imgPortada: {
        type: String
    }
});
const Album = mongoose.model('Album', storeSchema);

module.exports = { Album }