import { User } from "../../domain/entities/User";
import { UserDTO } from "../DTOs/UserDTO";

export interface UserRepositoryInterface {
    getUsers: () => Promise<UserDTO[]>
    createUser: (user: User) => Promise<UserDTO>
}