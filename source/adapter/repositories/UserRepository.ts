import { UserRepositoryInterface } from '../../application/interfaces/UserRepositoryInterface';
import { User } from '../../domain/entities/User';

export default class UserRepository implements UserRepositoryInterface {
  public async getUsers(): Promise<User[]> {
    // Lógica para resgatar usuários do banco

    const users = [
      {
        id: '123',
        username: 'Joao Silva',
        phone_number: '1999999-9999',
        password: 'ajlkhsdsajk',
      },
      {
        id: '124',
        username: 'Marcio Almeida',
        phone_number: '1998888-8888',
        password: 'lkajdliasf',
      },
    ];
    return users.map((user) => ({
      id: user.id,
      name: user.username,
      phone: user.phone_number,
      password: user.password,
    }));
  }

  public async createUser(user: User): Promise<User> {
    // Lógica para armazenar usuário no banco

    const createdUser = {
      id: user.id,
      username: user.name,
      phone_number: user.phone,
      password: user.password,
    };
    return {
      id: createdUser.id,
      name: createdUser.username,
      phone: createdUser.phone_number,
      password: createdUser.password,
    };
  }
}
