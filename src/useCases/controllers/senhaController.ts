import express, { Request, Response } from 'express';
import { SenhaService } from '../services/senhaService';

export class SenhaController {
    private senhaService: SenhaService
    constructor(senhaService: SenhaService){
        this.senhaService = senhaService
    }
    async gerarSenha(req: Request, res: Response){
        const data = req.body
        const response = await this.senhaService.gerarSenha(data)
        const message = {
            numeroSenha: response
        }
        return res.status(201).json({message})
    }
}