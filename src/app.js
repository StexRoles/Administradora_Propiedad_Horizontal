/* REQUERIMOS EXPRESS Y LO GUARDAMOS EN LA VARIABLE APP */
const express = require('express');
const app = express();

const path = require('path'); // REQUERIMOS PATH

// MIDDLEWARES GLOBALES
app.use(express.static(path.join(__dirname, '../public'))); // PARA USAR ARCHIVOS ESTATICOS

// CONFIGURAR MOTOR DE PLANTILLAS ENGINE JAVA SCRIPT
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// REQUERIMOS ROUTER EN CADA VARIABLE DONDE SE USARA: APP.JS --> ROUTER --> CONTROLLER
const mainRouter = require('./routers/mainRouter.js');

// ------------------------------- RUTAS ------------------------------------- //

app.use('/', mainRouter);

// --------------------------------------------------------------------------- //

// SERVIDOR EN PUERTO 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});