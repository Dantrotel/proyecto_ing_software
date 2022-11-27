const maquina = require('../models/tipomaquina');

// CRUD TipoMaquina

const createTipomaquina = (req, res) => {
    const {tipo, capacidad} = req.body;
    const newTipomaquina = new Tipomaquina({
            tipo,capacidad
    });
    newTipomaquina.save((err, Tipomaquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el tipo de maquina" })
        }
        return res.status(201).send(Tipomaquina)
    })
}

const getTipomaquina = (req, res) => {
    Tipomaquina.find({}, (err, Tipomaquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el tipo de maquina" })
        }
        return res.status(200).send(Tipomaquina)
    })
}

const getSpecificTipomaquina = (req, res) => {
    const { id } = req.params
    Tipomaquina.findById(id, (err, Tipomaquina) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar el tipo de maquina" })
        }
        if (!Tipomaquina) {
            return res.status(404).send({ message: "No se encontro el tipo de maquina" })
        }
        return res.status(201).send(Tipomaquina)
    })
}

const updateTipomaquina = (req, res) => {
    const { id } = req.params;
    Tipomaquina.findByIdAndUpdate
    (id,req.body, (err, Tipomaquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el tipo de maquina" })
        }
        if (!Tipomaquina) {
            return res.status(404).send({ message: "Tipo de maquina no encontrada" })
        }
        return res.status(200).send(Tipomaquina)
    })
}

const deleteTipomaquina = (req, res) => {
    const { tipo } = req.params;
    Tipomaquina.findByIdAndDelete
    (tipo, (err, Tipomaquina) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el tipo de maquina" })
        }
        if (!Tipomaquina) {
            return res.status(404).send({ message: "Tipo de maquina no encontrado" })
        }
        return res.status(200).send(Tipomaquina)
    })
}

module.exports = {
    createTipomaquina,
    getTipomaquina,
    getSpecificTipomaquina,
    updateTipomaquina,
    deleteTipomaquina
}
