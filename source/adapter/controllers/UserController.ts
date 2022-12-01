import { Request, Response, NextFunction } from 'express';
import UserUseCase from '../../application/useCases/UserUseCase';
import UserRepository from '../repositories/UserRepository';

const userRepository = new UserRepository()
const userUseCase = new UserUseCase(userRepository)

export class UserController {
    public async getUsers (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        const users = await userUseCase.listUsers()
        return res.status(200).json({
            data: users,
            message: 'Sucesso'
        });
    };

    public async createUser (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        const { body } = req
        const { name, phone, password } = body
        const user = await userUseCase.createNewUser(name, phone, password)
        return res.status(200).json({
            data: user,
            message: 'Sucesso'
        });
    };

}
