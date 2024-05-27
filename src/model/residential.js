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
            const result = await pool.query("SELECT TO_CHAR (v_valor, '$9,999,999,999') AS v_valor, CONCAT(UPPER(SUBSTRING(n_nombre FROM 1 FOR 1)), LOWER(SUBSTRING(n_nombre FROM 2))) AS n_nombre FROM concepto c, conjunto cj WHERE c.k_conjunto = cj.k_conjunto;");
            return result.rows;
        } catch (error) {
            return error;
        }
    },	
};

export default residential;
