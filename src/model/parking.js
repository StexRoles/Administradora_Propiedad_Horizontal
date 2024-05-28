import { pool } from './connectionPostgresSQL.js';

const parking = {
    findAll: async () => {
        try {
            const result = await pool.query("SELECT * FROM parqueadero;");
            return result.rows;
        } catch (error) {
            return error;
        }
    },
    updateParking: async (k_apartamento, k_parqueadero) => {
        try {
            const result = await pool.query("UPDATE parqueadero SET k_apartamento = $1 WHERE k_parqueadero = $2;", [k_apartamento, k_parqueadero]);
            return result;
        } catch (error) {
            return error;
        }
    },
};

export default parking;
