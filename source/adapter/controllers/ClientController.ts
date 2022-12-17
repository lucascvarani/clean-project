import { Request, Response, NextFunction } from 'express';
import ClientUseCase from '../../application/useCases/ClientUseCase';
import ClientRepository from '../repositories/ClientRepository';

const clientRepository = new ClientRepository();
const clientUseCase = new ClientUseCase(clientRepository);

export class ClientController {
  public async getClients(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    console.log(req.query);
    const barberShopId = String(req.query.barberShopId);
    const clients = await clientUseCase.listClients(barberShopId);
    return res.status(200).json({
      data: clients,
      message: 'Sucesso',
    });
  }

  public async createClient(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    const { body } = req;
    const { nickname, user, barberShop } = body;
    const client = await clientUseCase.createNewClient(nickname, user, barberShop);
    return res.status(200).json({
      data: client,
      message: 'Sucesso',
    });
  }
}
