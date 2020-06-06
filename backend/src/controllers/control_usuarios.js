const controlUsuarios = {};
const Usuario = require('../models/Usuario')

controlUsuarios.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

controlUsuarios.crearUsuario = async (req, res) => {
    const {username, genero, fecha} = req.body;
    const nuevoUsuario = new Usuario({username, genero, fecha});
    await nuevoUsuario.save();
    res.json('Usuario creado');
};

controlUsuarios.borrarUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json('Usuario eliminado');
};

controlUsuarios.actualizarUsuario = async (req, res) => {
    const {username, genero, fecha} = req.body;
    await Usuario.findOneAndUpdate({ _id: req.params.id}, {
        username, genero,
        fecha,
    });
    res.json({message: 'Usuario actualizada'})
}
controlUsuarios.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

module.exports = controlUsuarios;