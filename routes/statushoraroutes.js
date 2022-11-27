const express = require('express');
const api = express.Router();
const statushocontroller = require('../controllers/statushocontroller');

api.post('/statushora/create', statushocontroller.createStatusHora);
api.get('/statushora/get', statushocontroller.getStatusHora);
api.get('/statushora/search/:id', statushocontroller.getSpecificStatusHora);
api.put('/statushora/update/:id', statushocontroller.updateStatusHora);
api.delete('/statushora/delete/:id', statushocontroller.deleteStatusHora);

module.exports = api;