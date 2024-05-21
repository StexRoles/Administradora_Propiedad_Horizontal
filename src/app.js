/* REQUERIMOS EXPRESS Y LO GUARDAMOS EN LA VARIABLE APP */
import express from 'express';
const app = express();

import path from 'path'; // REQUERIMOS PATH

// CONFIGURAMOS PARA USAR dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MIDDLEWARES GLOBALES
app.use(express.static(path.join(__dirname, '../public'))); // PARA USAR ARCHIVOS ESTATICOS

// CONFIGURAR MOTOR DE PLANTILLAS ENGINE JAVA SCRIPT
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// REQUERIMOS ROUTER EN CADA VARIABLE DONDE SE USARA: APP.JS --> ROUTER --> CONTROLLER
import mainRouter from './routers/mainRouter.js';

// ------------------------------- RUTAS ------------------------------------- //

app.use('/', mainRouter);

// --------------------------------------------------------------------------- //

// SERVIDOR EN PUERTO 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});