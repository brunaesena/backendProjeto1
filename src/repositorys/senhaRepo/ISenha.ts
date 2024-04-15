import {Senha} from "../../entities/Senha"
export interface ISenha {
    save(data: Senha): Promise<Senha>
    getLastRecord(): Promise<number>
}