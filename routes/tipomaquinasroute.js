const express = require('express');
const api = express.Router();
const tipomaquinacontroller = require('../controllers/tipomaquinacontroller');

api.post('/tipomaquina/create', tipomaquinacontroller.createTipomaquina);
api.get('/tipomaquina/get', tipomaquinacontroller.getTipomaquina);
api.get('/tipomaquina/search/:id', tipomaquinacontroller.getSpecificTipomaquina);
api.put('/tipomaquina/update/:id', tipomaquinacontroller.updateTipomaquina);
api.delete('/tipomaquina/delete/:id', tipomaquinacontroller.deleteTipomaquina);

module.exports = api;