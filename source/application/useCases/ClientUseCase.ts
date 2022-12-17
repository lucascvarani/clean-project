import { BarberShop } from '../../domain/entities/BarberShop';
import { Client } from '../../domain/entities/Client';
import { User } from '../../domain/entities/User';
import { ClientRepositoryInterface } from '../interfaces/ClientRepositoryInterface';

export default class ClientUseCase {
  clientRepositoryInterface: ClientRepositoryInterface;
  constructor(clientRepositoryInterface: ClientRepositoryInterface) {
    this.clientRepositoryInterface = clientRepositoryInterface;
  }

  public async listClients(barberShopId: string): Promise<Client[]> {
    const clients = await this.clientRepositoryInterface.getClients(barberShopId);
    return clients;
  }

  public async createNewClient(nickname: string, user: User, barberShop: BarberShop): Promise<Client> {
    const clientToCreate = new Client({ nickname, user, barberShop });
    return await this.clientRepositoryInterface.createClient(clientToCreate);
  }
}
