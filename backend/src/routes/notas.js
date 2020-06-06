const { Router } = require('express');
const router = Router();
const {getNotas, crearNota, getNota, actualizarNota, borrarNota} = require('../controllers/control_notas');

router.route('/')
    .get(getNotas)
    .post(crearNota)

router.route('/:id')
    .get(getNota)
    .put(actualizarNota)
    .delete(borrarNota)

module.exports = router;
