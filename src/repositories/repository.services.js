import { query } from "../database/sqlite.js";

async function Listar() {
    let sql = `SELECT id_service, description FROM services ORDER BY description`;
    const services = await query(sql);
    return services;
}

export default { Listar };