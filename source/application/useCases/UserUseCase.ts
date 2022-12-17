import { User } from '../../domain/entities/User';
import { UserRepositoryInterface } from '../interfaces/UserRepositoryInterface';

export default class UserUseCase {
  userRepositoryInterface: UserRepositoryInterface;
  constructor(userRepositoryInterface: UserRepositoryInterface) {
    this.userRepositoryInterface = userRepositoryInterface;
  }

  public async listUsers(): Promise<User[]> {
    const users = await this.userRepositoryInterface.getUsers();
    return users;
  }

  public async createNewUser(name: string, phone: string, password: string): Promise<User> {
    const userToCreate = new User({ name, phone, password });
    return await this.userRepositoryInterface.createUser(userToCreate);
  }
}
