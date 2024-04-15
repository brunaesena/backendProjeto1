import { PrismaClient } from "@prisma/client";
import { ISenha } from "./ISenha";
import { Senha } from "../../entities/Senha";

export class SenhaRepo implements ISenha {
   private Banco = new PrismaClient()
   async save(data: Senha): Promise<Senha> {
        const res  =  await this.Banco.senha.create({
            data: {
                data: data.data ,
                tipoSenha: data.tipoSenha,
                atendida: data.atendida,
                numeroSenha: data.numeroSenha
            }
        })
        return res 
    }
    async getLastRecord(): Promise<number> {

            const lastRecord = await this.Banco.senha.findFirst({
              orderBy: {
                id: 'desc'
              }
            });
            return lastRecord?.numeroSenha ?? 0
    }   
}
  
    