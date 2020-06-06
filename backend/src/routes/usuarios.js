const { Router } = require('express');
const router = Router();
const {getUsuarios,borrarUsuario,crearUsuario,actualizarUsuario,getUsuario} = require('../controllers/control_usuarios');

router.route('/')
    .get(getUsuarios)
    .post(crearUsuario)

router.route('/:id')
    .get(getUsuario)
    .delete(borrarUsuario)
    .put(actualizarUsuario)

module.exports = router;
