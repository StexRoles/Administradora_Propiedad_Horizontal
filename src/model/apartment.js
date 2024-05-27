import { pool } from './connectionPostgresSQL.js';

const apartment = {
    findAll: async () => {
        try {
            const result = await pool.query("SELECT * FROM apartamento;");
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
    },
    newApartamento: async (apartamento) => {
        try {
            const result = await pool.query("INSERT INTO apartamento (k_apartamento, v_area, v_coeficiente, q_bloque, q_piso) VALUES ($1, $2, $3, $4, $5);", [apartamento.id, apartamento.area, apartamento.coeficiente, apartamento.bloque, apartamento.piso]);
        } catch (error) {
            return error;
        }
    },
    deleteApartamento: async (id) => {
        try {
            const result = await pool.query("DELETE FROM apartamento WHERE k_apartamento = $1;", [id]);
        } catch (error) {
            return error;
        }
    }
};

export default apartment;
