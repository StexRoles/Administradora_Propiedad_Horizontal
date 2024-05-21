import { pool } from './connectionPostgresSQL.js';

const db = {
    apartamentos: async () => {
        try {
            const result = await pool.query("SELECT * FROM apartamento;");
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    },
    newApartamento: async (apartamento) => {
        try {
            const result = await pool.query("INSERT INTO apartamento (k_apartamento, v_area, v_coeficiente, q_bloque, q_piso) VALUES ($1, $2, $3, $4, $5);", [apartamento.id, apartamento.area, apartamento.coeficiente, apartamento.bloque, apartamento.piso]);
        } catch (error) {
            console.log(error);
        }
    },
    deleteApartamento: async (id) => {
        try {
            const result = await pool.query("DELETE FROM apartamento WHERE k_apartamento = $1;", [id]);
        } catch (error) {
            console.log(error);
        }
    }
};

export default db;
