import { User } from '../../domain/entities/User';

export interface UserRepositoryInterface {
  getUsers: () => Promise<User[]>;
  createUser: (user: User) => Promise<User>;
}
