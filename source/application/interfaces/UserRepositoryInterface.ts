import { UserDTO } from "../DTOs/UserDTO";

export interface UserRepositoryInterface {
    getUsers: () => Promise<UserDTO[]>
    createUser: (user: UserDTO) => Promise<UserDTO>
}