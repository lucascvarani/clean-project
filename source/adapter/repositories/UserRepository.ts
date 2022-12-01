import { UserDTO } from "../../application/DTOs/UserDTO";
import { UserRepositoryInterface } from "../../application/interfaces/UserRepositoryInterface";

export default class UserRepository implements UserRepositoryInterface {
    public async getUsers (): Promise<UserDTO[]> {
        const users =[{
                id: '123',
                username: 'Joao',
                phone_number: '19995024465',
                password: 'ajlkhsdsajk'
            },
            {
                id: '124',
                username: 'Lucas',
                phone_number: '19995024462',
                password: 'lkajdliasf'
            }
        ]
        return users.map(user => ({id: user.id, name: user.username, phone: user.phone_number}))
    }

    public async createUser (): Promise<UserDTO> {
        const createdUser = {
                id: '123',
                username: 'Joao',
                phone_number: '19995024465',
                password: 'ajlkhsdsajk'
            }
        return ({id: createdUser.id, name: createdUser.username, phone: createdUser.phone_number})
    }
}