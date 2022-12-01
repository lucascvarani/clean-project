import { User } from "../../domain/entities/User"
import { UserDTO } from "../DTOs/UserDTO"
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface"

export default class UserUseCase {
    userRepositoryInterface: UserRepositoryInterface
    constructor(userRepositoryInterface: UserRepositoryInterface) {
        this.userRepositoryInterface = userRepositoryInterface
    }

    public async listUsers(): Promise<UserDTO[]> {
        const users = await this.userRepositoryInterface.getUsers()
        return users
    }

    public async createNewUser(name: string, phone: string, password: string): Promise<UserDTO> {
        const userToCreate = new User({name, phone, password})
        const userDTO: UserDTO = { 
            id: userToCreate.id, 
            name: userToCreate.name, 
            phone: userToCreate.phone, 
            password: userToCreate.password 
        }
        return await this.userRepositoryInterface.createUser(userDTO)
    }
}