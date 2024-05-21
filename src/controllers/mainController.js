import db from '../model/postgresql.js';

// CREANDO OBJETO LITERAL CON TODOS LOS METODOS QUE SE USARAN EN LAS RUTAS
const mainController = {
    index: async (req, res) => {
        // ENVIAMOS LA VISTA DEL INDEX
        res.render('index');
        
        let deleteApartamento = await db.deleteApartamento(6);
    
    },
    apartamentos: (req, res) => {
        // ENVIAMOS LA VISTA DE APARTAMENTOS
        res.render('apartamentos');
    },
    apartamentoInfo: (req, res) => {
        // ENVIAMOS LA VISTA DE APARTAMENTOINFO
        res.render('apartamentoInfo');
    },
    admin: (req, res) => {
        // ENVIAMOS LA VISTA DE ADMIN
        res.render('administracion');
    
    }
}

// EXPORTANDO EL OBJETO LITERAL PARA PODER USAR LAS FUNCIONES EN EL ROUTER
export default mainController;