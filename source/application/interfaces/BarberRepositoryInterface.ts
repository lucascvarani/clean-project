import { Barber } from '../../domain/entities/Barber';

export interface BarberRepositoryInterface {
  getBarbers: (barberShopId: string) => Promise<Barber[]>;
  createBarber: (barber: Barber) => Promise<Barber>;
  getBarberById: (barberId: string) => Promise<Barber>
  updateBarber: (barber: Barber) => Promise<Barber>;
}
