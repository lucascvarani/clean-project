import { Request, Response, NextFunction } from 'express';
import BarberShopUseCase from '../../application/useCases/BarberShopUseCase';
import BarberShopRepository from '../repositories/BarberShopRepository';

const barberRepository = new BarberShopRepository();
const barberShopUseCase = new BarberShopUseCase(barberRepository);

export class BarberShopController {
  public async createBarberShop(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    const { body } = req;
    const { name, streetNumber, streetName, zipCode, city } = body;
    const barber = await barberShopUseCase.createNewBarberShop({ name, streetNumber, streetName, zipCode, city });
    return res.status(200).json({
      data: barber,
      message: 'Sucesso',
    });
  }
}
