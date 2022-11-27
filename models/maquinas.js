const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maquinaSchema = new Schema({
    tipo: {
        type: Schema.ObjectId,
        ref: 'Tipomaquina'
    },
    serie : {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        ref: 'Tipomaquina'
    },
    observaciones: {
        type: String,
        required: true
    },
    usohoras: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Maquina', maquinaSchema);