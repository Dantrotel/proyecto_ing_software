const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StatusHoraSchema = new Schema({
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('StatusHora', StatusHoraSchema);