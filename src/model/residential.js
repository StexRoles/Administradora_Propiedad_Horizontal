import { pool } from './connectionPostgresSQL.js';

const residential = {
    findAll: async () => {
        try {
            const result = await pool.query('SELECT TO_CHAR (t_descuento, \'0.9\') AS "t_descuento", TO_CHAR (t_mora, \'0.9\')  AS "t_mora", TO_CHAR (v_base, \'$9,999,999,999\') AS "v_base", o_direccion  FROM conjunto;');
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },
    concepts: async () => {
        try {
            const result = await pool.query("SELECT TO_CHAR (v_valor, '$9,999,999,999') AS v_valor, CONCAT(UPPER(SUBSTRING(n_nombre FROM 1 FOR 1)), LOWER(SUBSTRING(n_nombre FROM 2))) AS n_nombre, k_concepto FROM concepto c, conjunto cj WHERE c.k_conjunto = cj.k_conjunto;");
            return result.rows;
        } catch (error) {
            return error;
        }
    },
    updateResidential: async (discount, mora, fee) => {
        try {
            const result = await pool.query('UPDATE conjunto SET t_descuento = $1, t_mora = $2, v_base = $3 WHERE k_conjunto = 11111;', [discount, mora, fee]);
        } catch (error) {
            return error;
        }
    },
    updateConcept: async (key, value) => {
        try {
            const result = await pool.query('UPDATE concepto SET v_valor = $1 WHERE k_concepto = $2;', [value, key]);
        } catch (error) {
            return error;
        }
    }
};

export default residential;
