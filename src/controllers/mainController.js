// CREANDO OBJETO LITERAL CON TODOS LOS METODOS QUE SE USARAN EN LAS RUTAS
const mainController = {
    index: (req, res) => {
        res.render('index');
    }
}

// EXPORTANDO EL OBJETO LITERAL PARA PODER USAR LAS FUNCIONES EN EL ROUTER
module.exports = mainController;