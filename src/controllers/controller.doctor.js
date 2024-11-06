import serviceDoctor from "../services/service.doctor.js";

async function Listar(req, res) {
    const name = req.query.name;
    const doctors = await serviceDoctor.Listar(name);
    res.status(200).json(doctors);
}

async function Inserir(req, res) {
    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctor.Inserir(name, specialty, icon);
    res.status(201).json(doctor);
}

async function Editar(req, res) {
    const id_doctor = req.params.id_doctor;
    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon);
    res.status(200).json(doctor);
}

async function Excluir(req, res) {
    const id_doctor = req.params.id_doctor;
    const doctor = await serviceDoctor.Excluir(id_doctor);
    res.status(200).json(doctor);
}

async function ListarServicos(req, res) {
    const id_doctor = req.params.id_doctor;
    const serv = await serviceDoctor.ListarServicos(id_doctor);
    res.status(200).json(serv);
}

async function Obter(req, res) {
    const id_doctor = req.params.id_doctor;
    const doctor = await serviceDoctor.Obter(id_doctor);
    if (!doctor) {
        return res.status(404).json({ error: 'Médico não encontrado' });
    }
    res.status(200).json(doctor);
}

async function AdicionarServico(req, res) {
    const id_doctor = req.params.id_doctor;
    const { id_service, price } = req.body;
    const servico = await serviceDoctor.AdicionarServico(id_doctor, id_service, price);
    res.status(201).json(servico);
}

async function EditarServico(req, res) {
    const id_doctor = req.params.id_doctor;
    const { id_service, price } = req.body;
    const servico = await serviceDoctor.EditarServico(id_doctor, id_service, price);
    res.status(200).json(servico);
}

// Funções específicas para o administrador
async function InserirAdmin(req, res) {
    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctor.Inserir(name, specialty, icon);
    res.status(201).json(doctor);
}

async function EditarAdmin(req, res) {
    const id_doctor = req.params.id_doctor;
    const { name, specialty, icon } = req.body;
    const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon);
    res.status(200).json(doctor);
}

async function ExcluirAdmin(req, res) {
    const id_doctor = req.params.id_doctor;
    const doctor = await serviceDoctor.Excluir(id_doctor);
    res.status(200).json(doctor);
}

async function AdicionarServicoAdmin(req, res) {
    const id_doctor = req.params.id_doctor;
    const { id_service, price } = req.body;
    const servico = await serviceDoctor.AdicionarServico(id_doctor, id_service, price);
    res.status(201).json(servico);
}

async function EditarServicoAdmin(req, res) {
    const id_doctor = req.params.id_doctor;
    const { id_service, price } = req.body;
    const servico = await serviceDoctor.EditarServico(id_doctor, id_service, price);
    res.status(200).json(servico);
}

export default { 
    Listar, Inserir, Editar, Excluir, ListarServicos, Obter, AdicionarServico, EditarServico,
    InserirAdmin, EditarAdmin, ExcluirAdmin, AdicionarServicoAdmin, EditarServicoAdmin 
};