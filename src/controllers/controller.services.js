import serviceService from "../services/service.services.js";

async function Listar(req, res) {
    const services = await serviceService.Listar();
    res.status(200).json(services);
}

export default { Listar };