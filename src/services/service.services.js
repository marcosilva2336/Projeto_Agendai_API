import repoService from "../repositories/repository.services.js";

async function Listar() {
    const services = await repoService.Listar();
    return services;
}

export default { Listar };