import repoDoctor from "../repositories/repository.doctor.js";

async function Listar(name) {
    const doctors = await repoDoctor.Listar(name);
    return doctors;
}

async function Inserir(name, specialty, icon) {
    const doctor = await repoDoctor.Inserir(name, specialty, icon);
    return doctor;
}

async function Editar(id_doctor, name, specialty, icon) {
    const doctor = await repoDoctor.Editar(id_doctor, name, specialty, icon);
    return doctor;
}

async function Excluir(id_doctor) {
    const doctor = await repoDoctor.Excluir(id_doctor);
    return doctor;
}

async function ListarServicos(id_doctor) {
    const serv = await repoDoctor.ListarServicos(id_doctor);
    return serv;
}

async function Obter(id_doctor) {
    const doctor = await repoDoctor.Obter(id_doctor);
    return doctor;
}

async function AdicionarServico(id_doctor, id_service, price) {
    const servico = await repoDoctor.AdicionarServico(id_doctor, id_service, price);
    return servico;
}

async function EditarServico(id_doctor, id_service, price) {
    const servico = await repoDoctor.EditarServico(id_doctor, id_service, price);
    return servico;
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos, Obter, AdicionarServico, EditarServico };