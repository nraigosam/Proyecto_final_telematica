const controlNotas ={};

const Nota = require('../models/Nota');

controlNotas.getNotas = async (req, res) => {
    const notas = await Nota.find();
    res.json(notas);
};

controlNotas.crearNota = async (req, res) => {
    const { titulo, contenido, fecha, autor} = req.body;
    const nuevaNota = new Nota({
        titulo,
        contenido,
        fecha,
        autor
    });
    await nuevaNota.save();
    res.json({message: 'Nota guardada'});
};

controlNotas.getNota = async (req, res) => {
    const nota = await Nota.findById(req.params.id);
    res.json(nota);
};

controlNotas.actualizarNota = async (req, res) => {
    const { titulo, contenido, fecha, autor} = req.body;
    await Nota.findOneAndUpdate({ _id: req.params.id}, {
        titulo,
        contenido,
        fecha,
        autor
    });
    res.json({message: 'nota actualizada'})
}

controlNotas.borrarNota = async (req, res) => {
    await Nota.findByIdAndDelete(req.params.id);
    res.json({message: 'nota eliminada'});
};


module.exports =controlNotas;