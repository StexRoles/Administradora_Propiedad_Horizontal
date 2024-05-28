import { pool } from './connectionPostgresSQL.js';

const apartment = {
    findParking: async () => {
        try {
            const result = await pool.query("SELECT a.k_apartamento, p.k_parqueadero FROM apartamento a LEFT JOIN parqueadero p ON a.k_apartamento = p.k_apartamento;");
            return result.rows;
        } catch (error) {
            return error;
        }
    },
    findResidents: async () => {
        try {
            const result = await pool.query("SELECT DISTINCT ON (a.k_apartamento) a.k_apartamento, r.k_numeropersona FROM apartamento a LEFT JOIN residente r ON a.k_apartamento = r.k_apartamento;");
            return result.rows;
        } catch (error) {
            return error;
        }
    },
    findByPk: async (id) => {
        try {
            const result = await pool.query("SELECT a.k_apartamento, TO_CHAR (v_area, '999,999') AS v_area, TO_CHAR (v_coeficiente, '999,999.9') AS v_coeficiente, q_bloque, q_piso, TO_CHAR (v_base * v_coeficiente, '$9,999,999,999') AS v_total, k_parqueadero FROM conjunto, apartamento a LEFT JOIN parqueadero p ON a.k_apartamento = p.k_apartamento WHERE a.k_apartamento = $1;", [id]);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    }
};

export default apartment;
