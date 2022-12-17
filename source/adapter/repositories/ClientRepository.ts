import { ClientRepositoryInterface } from '../../application/interfaces/ClientRepositoryInterface';
import { Address } from '../../domain/entities/Address';
import { BarberShop } from '../../domain/entities/BarberShop';
import { Client } from '../../domain/entities/Client';
import { User } from '../../domain/entities/User';

export default class ClientRepository implements ClientRepositoryInterface {
  public async getClients(barberShopId: string): Promise<Client[]> {
    // Lógica para resgatar clientes da barbearia do banco

    const clients = [
      {
        id: '111111',
        nickname: 'Pedrinho',
        user: new User({ id: '123', name: 'João Silva', phone: '1999999-9999' }),
        barberShop: new BarberShop({
          id: barberShopId,
          name: 'Gold BarberShop',
          address: new Address({
            id: '111',
            streetNumber: '120',
            streetName: 'Rua Pajé',
            zipCode: '13033555',
            city: 'Campinas',
          }),
        }),
      },
      {
        id: '222222',
        nickname: 'Jaozinho',
        user: new User({ id: '124', name: 'Marcio Almeida', phone: '1998888-8888' }),
        barberShop: new BarberShop({
          id: barberShopId,
          name: 'Gold BarberShop',
          address: new Address({
            id: '111',
            streetNumber: '120',
            streetName: 'Rua Pajé',
            zipCode: '13033555',
            city: 'Campinas',
          }),
        }),
      },
    ];
    return clients.map((client) => ({
      id: client.id,
      nickname: client.nickname,
      user: client.user,
      barberShop: client.barberShop,
    }));
  }

  public async createClient(client: Client): Promise<Client> {
    // Lógica para armazenar cliente no banco
    // Sugestão: guardar apenas o id da barbearia e do usuário

    const createdClient = {
      id: client.id,
      nickname: client.nickname,
      user: client.user,
      barberShop: client.barberShop,
    };

    return {
      id: createdClient.id,
      nickname: createdClient.nickname,
      user: createdClient.user,
      barberShop: createdClient.barberShop,
    };
  }
}
