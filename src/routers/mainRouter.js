// REQUERIR EXPRESS Y USAR ROUTER
import express from 'express';
const router = express.Router();

// REQUERIR mainController PARA USAR SUS METODOS
import mainController from '../controllers/mainController.js';

//---------------------------------------------------------------//

//RUTA PARA EL HOME
router.get('/', mainController.index);

// RUTA PARA BUSCAR UN APARTAMENTO
router.get('/apartamentos', mainController.consultarApt);
router.post('/apartamentos', mainController.searchApartamento);

// RUTA PARA LA INFORMACION DE LOS APARTAMENTOS
router.get('/apartamentos/:id', mainController.apartamentoInfo);

// RUTA PARA LA ADMINISTRACION
router.get('/administracion', mainController.admin);

// RUTA PARA EDITAR DATOS DE LA ADMINISTRACION
router.get('/administracion/editar', mainController.adminEdit);
router.post('/administracion/editar', mainController.adminEditProcess);

// RUTA PARA CONSULTAR LOS APARTAMENTOS
router.get('/administracion/apartamentos', mainController.adminApartamentos);


//---------------------------------------------------------------//
// EXPORTAR ROUTER
export default router;