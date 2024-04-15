import { Request, Response, Router } from 'express';
import { senhaController } from './useCases/index.ts/senhaController';

const router = Router()

router.post('/api/v1/senha/gerarSenha', async (req: Request, res: Response) =>{
    return await senhaController.gerarSenha(req, res)
})
export {router}