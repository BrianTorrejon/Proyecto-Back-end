const express = require('express');
const router = express.Router(); 
const {vistaCanciones, crearCancion} = require('../controller/controller.js')

/* GET users listing. */
router.get('/ver', vistaCanciones);
router.post('/crear', crearCancion);

module.exports = router;
