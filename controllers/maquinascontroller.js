const Horario = require('../models/horario');
const Maquina = require('../models/maquinas');

// CRUD maquina

const createMaquina = (req, res) => {
    const {tipo, marca, serie, capacidad, observaciones, usohoras} = req.body;
    const newMaquina = new Maquina({
            tipo,marca,serie,capacidad,observaciones,usohoras
    });
    newMaquina.save((err, Maquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear la maquina" })
        }
        return res.status(201).send(Maquina)
    })
}

const getMaquina = (req, res) => {
    Maquina.find({}, (err, Maquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la maquina" })
        }
        return res.status(200).send(Maquina)
    })
}

const getSpecificMaquina = (req, res) => {
    const { serie } = req.params
    Maquina.findById(serie, (err, Maquina) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar la maquina" })
        }
        if (!Maquina) {
            return res.status(404).send({ message: "No se encontro la maquina" })
        }
        return res.status(201).send(Maquina)
    })
}

const updateMaquina = (req, res) => {
    const { serie } = req.params;
    Maquina.findByIdAndUpdate(serie, req.body, (err, Maquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la maquina" })
        }
        if (!Maquina) {
            return res.status(404).send({ message: "Maquina no encontrada" })
        }
        return res.status(200).send(Maquina)
    })
}

const deleteMaquina = (req, res) => {
    const { serie } = req.params;
    Maquina.findByIdAndDelete(serie, (err, Maquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la maquina" })
        }
        if (!Maquina) {
            return res.status(404).send({ message: "Maquina no encontrada" })
        }
        return res.status(200).send(Maquina)
    })
}

module.exports = {
    createMaquina,
    getMaquina,
    getSpecificMaquina,
    updateMaquina,
    deleteMaquina
}


