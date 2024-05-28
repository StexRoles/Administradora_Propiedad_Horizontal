import apartment from '../model/apartment.js';
import residential from '../model/residential.js';
import person from '../model/person.js';
import parking from '../model/parking.js';

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
        res.render('apartamentoInfo', { responsable, habitantes, apartamento });
    },
    admin: async (req, res) => {

        // TRAEMOS LA INFORMACION DEL CONJUNTO
        let conjunto = await residential.findAll();

        // TRAEMOS LA INFORMACION DE LOS CONCEPTOS
        let concepts = await residential.concepts();

        // ENVIAMOS LA VISTA DE ADMIN
        res.render('administracion', { conjunto, concepts });
    },
    adminEdit: async (req, res) => {
        // TRAEMOS LA INFORMACION DEL CONJUNTO
        let conjunto = await residential.findAll();

        // TRAEMOS LA INFORMACION DE LOS CONCEPTOS
        let concepts = await residential.concepts();

        // ENVIAMOS LA VISTA DE EDITAR ADMINISTRACION
        res.render('adminEdit', { conjunto, concepts });
    },
    adminEditProcess: async (req, res) => {

        // TRAEMOS LA INFORMACION DEL CONJUNTO Y LOS CONCEPTOS
        let conjunto = await residential.findAll();
        let conceptos = await residential.concepts();

        // TRAEMOS LOD DATOS DEL FORMULARIO
        let data = req.body;

        // DESESTRUCTURAMOS LOS DATOS
        let { discount, mora, fee, ...concepts } = data;

        // Verificar cada campo y establecer un valor predeterminado si es nulo o está vacío
        discount = data.discount || conjunto.t_descuento;
        mora = data.mora || conjunto.t_mora;
        fee = data.fee || conjunto.v_base;

        // OBETENEMOS LAS LLAVES DE LOS CONCEPTOS
        let keys = Object.keys(concepts);
        
        // ACTUALIZAMOS LA INFORMACION DE LOS CONCEPTOS
        keys.forEach(async (key) => {
            let value = concepts[key] || conceptos[key];
            await residential.updateConcept(key, value);
        });

        // ACTIALIZAMOS LA INFORMACION DEL CONJUNTO
        let update = await residential.updateResidential(discount, mora, fee);

        setTimeout(() => {
            res.redirect('/administracion');
        }, 1500);
    },
    adminApartamentos: async (req, res) => {
        // TRAEMOS LOS APARTAMENTOS
        let apartamentos = await apartment.findResidents();

        // ENVIAMOS LA VISTA DE APARTAMENTOS ADMINISTRACION
        res.render('adminApt', { apartamentos });
    },
    adminParqueaderos: async (req, res) => {

        // TRAEMOS LOS APARTAMENTOS
        let apartamentos = await apartment.findParking();

        // TRAEMOS LOS PARQUEADEROS
        let parqueaderos = await parking.findAll();

        // ENVIAMOS LA VISTA DE PARQUEADEROS
        res.render('parqueadero', { apartamentos, parqueaderos });
    },
    adminParqueaderosProcess: async (req, res) => {

        // TRAEMOS LA INFORMACION DEL FORMULARIO
        let data = req.body;

        // ACTUALIZAMOS LA INFORMACION DEL PARQUEADERO
        let update = await parking.updateParking(data.apartment, data.parking);

        setTimeout(() => {
            res.redirect('/administracion');
        }, 1500);
    },
}

// EXPORTANDO EL OBJETO LITERAL PARA PODER USAR LAS FUNCIONES EN EL ROUTER
export default mainController;