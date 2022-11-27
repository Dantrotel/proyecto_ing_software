const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TipomaquinaSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Tipomaquina', TipomaquinaSchema);
