const express = require('express');
const api = express.Router();
const maquinascontroller = require('../controllers/maquinascontroller');

api.post('/maquina/create', maquinascontroller.createMaquina);
api.get('/maquina/get', maquinascontroller.getMaquina);
api.get('/maquina/search/:serie', maquinascontroller.getSpecificMaquina);
api.put('/maquina/update/:serie', maquinascontroller.updateMaquina);
api.delete('/maquina/delete/:serie', maquinascontroller.deleteMaquina);

module.exports = api;