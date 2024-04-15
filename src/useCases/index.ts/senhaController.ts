import { SenhaRepo } from "../../repositorys/senhaRepo/SenhaRepo";
import { SenhaController } from "../controllers/senhaController";
import { SenhaService } from "../services/senhaService";
const senhaRepo = new SenhaRepo()
const senhaService = new SenhaService(senhaRepo)
const senhaController = new SenhaController(senhaService)

export {senhaController}