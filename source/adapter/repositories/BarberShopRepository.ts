import { BarberShopRepositoryInterface } from '../../application/interfaces/BarberShopRepositoryInterface';
import { BarberShop } from '../../domain/entities/BarberShop';

export default class barberRepository implements BarberShopRepositoryInterface {
  public async createBarberShop(barberShop: BarberShop): Promise<BarberShop> {
    const createdBarberShop = barberShop;
    return createdBarberShop;
  }
}
