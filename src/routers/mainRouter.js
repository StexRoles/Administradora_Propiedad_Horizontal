// REQUERIR EXPRESS Y USAR ROUTER
const express = require('express');
const router = express.Router();

// REQUERIR mainController PARA USAR SUS METODOS
const mainController = require('../controllers/mainController.js');

//---------------------------------------------------------------//

//RUTA PARA EL HOME
router.get('/', mainController.index);

// RUTA PARA BUSCAR UN APARTAMENTO
router.get('/apartamentos', mainController.apartamentos);

// RUTA PARA LA INFORMACION DE LOS APARTAMENTOS
router.get('/apartamentos/:id', mainController.apartamentoInfo);

// RUTA PARA LA ADMINISTRACION
router.get('/administracion', mainController.admin);


//---------------------------------------------------------------//
// EXPORTAR ROUTER
module.exports = router;