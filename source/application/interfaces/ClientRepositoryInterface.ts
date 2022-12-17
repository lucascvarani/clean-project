import { BarberShop } from '../../domain/entities/BarberShop';
import { Client } from '../../domain/entities/Client';

export interface ClientRepositoryInterface {
  getClients: (barberShopId: string) => Promise<Client[]>;
  createClient: (client: Client) => Promise<Client>;
}
