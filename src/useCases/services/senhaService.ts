import { Senha } from "../../entities/Senha";
import { SenhaRepo } from "../../repositorys/senhaRepo/SenhaRepo";

export class SenhaService {
    private senhaRepo: SenhaRepo
    constructor(senhaRepo: SenhaRepo){
        this.senhaRepo = senhaRepo
    }
    async gerarSenha(tipoSenha: string):Promise<number>{
        const data = new Date()
        let sequencia = await this.senhaRepo.getLastRecord()
        sequencia++
        const day = `${data.getDay}/${data.getMonth}/${data.getFullYear}-${tipoSenha}-${sequencia}`
        const senha = {
             data: day,
             tipoSenha: tipoSenha, 
             atendida: false,
             numeroSenha: sequencia
        } as Senha

        return sequencia
    }
}