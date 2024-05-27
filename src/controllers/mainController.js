import apartment from '../model/apartment.js';
import residential from '../model/residential.js';
import person from '../model/person.js';

// CREANDO OBJETO LITERAL CON TODOS LOS METODOS QUE SE USARAN EN LAS RUTAS
const mainController = {
    index: async (req, res) => {
        // ENVIAMOS LA VISTA DEL INDEX
        res.render('index');
    },
    consultarApt: (req, res) => {
        // ENVIAMOS LA VISTA DE APARTAMENTOS
        res.render('consultarApt');
    },
    searchApartamento: async (req, res) => {
        // TRAEMOS EL ID DEL APARTAMENTO
        let id = req.body.id;

        // BUSCAMOS SI EL APARTAMENTO EXISTE
        let apartamento = await apartment.findByPk(id);

        // SI NO EXISTE REENVIAMOS LA VISTA DE CONSULTAR APT
        if (apartamento == undefined) {
            res.redirect('/apartamentos');
        } else {
            // SI EXISTE REENVIAMOS LA VISTA DE DETALLE
            res.redirect(`/apartamentos/${id}`);
        }
    },
    apartamentoInfo: async (req, res) => {
        // TRAEMOS EL ID DEL APARTAMENTO
        let id = req.params.id;

        // INFORMACION DEL APARTAMENTO
        let apartamento = await apartment.findByPk(id);

        // RESPONSABLE DEL APAARTAMENTO
        let responsable = await person.findManagerByPk(id);
        
        // HABITANTES DEL APARTAMENTO
        let habitantes = await person.findHabitantByPk(id);

        // ENVIAMOS LA VISTA DE APARTAMENTOINFO
        res.render('apartamentoInfo', {responsable, habitantes, apartamento});
    },
    admin: async (req, res) => {

        // TRAEMOS LA INFORMACION DEL CONJUNTO
        let conjunto = await residential.findAll();

        // TRAEMOS LA INFORMACION DE LOS CONCEPTOS
        let concepts = await residential.concepts();

        // ENVIAMOS LA VISTA DE ADMIN
        res.render('administracion', {conjunto, concepts});
    },
    adminEdit: (req, res) => {
        // ENVIAMOS LA VISTA DE EDITAR ADMINISTRACION
        res.render('adminEdit');
    },
    adminApartamentos: (req, res) => {
        // ENVIAMOS LA VISTA DE APARTAMENTOS ADMINISTRACION
        res.render('adminApt');
    },
}

// EXPORTANDO EL OBJETO LITERAL PARA PODER USAR LAS FUNCIONES EN EL ROUTER
export default mainController;