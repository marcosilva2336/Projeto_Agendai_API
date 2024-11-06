import { query } from "../database/sqlite.js";

async function Listar(name) {
    let filtro = [];
    let sql = "select * from doctors ";

    if (name) {
        sql = sql + "where name like ? ";
        filtro.push('%' + name + '%');
    }

    sql = sql + "order by name";
    const doctors = await query(sql, filtro);
    return doctors;
}

async function Inserir(name, specialty, icon) {
    let sql = `insert into doctors(name, specialty, icon) values(?, ?, ?)
    returning id_doctor`;
    const doctor = await query(sql, [name, specialty, icon]);
    return doctor[0];
}

async function Editar(id_doctor, name, specialty, icon) {
    let sql = `update doctors set name=?, specialty=?, icon=?
where id_doctor = ?`;
    await query(sql, [name, specialty, icon, id_doctor]);
    return { id_doctor };
}

async function Excluir(id_doctor) {
    let sql = `delete from doctors where id_doctor = ?`;
    await query(sql, [id_doctor]);
    return { id_doctor };
}

async function ListarServicos(id_doctor) {
    let sql = `select d.id_service, s.description, d.price
    from doctors_services d
    join services s on (s.id_service = d.id_service)
    where d.id_doctor = ?
    order by s.description`;
    const serv = await query(sql, [id_doctor]);
    return serv;
}

async function Obter(id_doctor) {
    let sql = `select * from doctors where id_doctor = ?`;
    const doctor = await query(sql, [id_doctor]);
    return doctor[0];
}

async function AdicionarServico(id_doctor, id_service, price) {
    let sql = `insert into doctors_services(id_doctor, id_service, price) values(?, ?, ?)`;
    await query(sql, [id_doctor, id_service, price]);
    return { id_doctor, id_service, price };
}

async function EditarServico(id_doctor, id_service, price) {
    let sql = `update doctors_services set price=? where id_doctor=? and id_service=?`;
    await query(sql, [price, id_doctor, id_service]);
    return { id_doctor, id_service, price };
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos, Obter, AdicionarServico, EditarServico };