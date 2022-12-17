import { BarberShop } from '../../domain/entities/BarberShop';
export interface BarberShopRepositoryInterface {
  createBarberShop: (barber: BarberShop) => Promise<BarberShop>;
}
