import { pool } from './connectionPostgresSQL.js';

const person = {
    findManagerByPk: async (id) => {
        try {
            const result = await pool.query("select p.k_tipopersona, p.k_numeropersona, o_correo, o_telefono, n_nombre1, n_nombre2, n_apellido1, n_apellido2 from apartamento a, responsable r, persona p WHERE a.k_numeropersona = r.k_numeropersona AND r.k_tipopersona = p.k_tipopersona AND r.k_numeropersona = p.k_numeropersona AND k_apartamento = $1;", [id]);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },
    findHabitantByPk: async (id) => {
        try {
            const result = await pool.query("SELECT * FROM apartamento a, residente r, persona p WHERE a.k_apartamento = r.k_apartamento AND a.k_apartamento = $1 AND r.k_tipopersona = p.k_tipopersona and r.k_numeropersona = p.k_numeropersona;", [id]);
            return result.rows;
        } catch (error) {
            return error;
        }
    },
};

export default person;