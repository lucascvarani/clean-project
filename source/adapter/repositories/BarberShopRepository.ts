import { BarberShopDTO } from "../../application/DTOs/BarberShopDTO";
import { UserDTO } from "../../application/DTOs/UserDTO";
import { BarberShopRepositoryInterface } from "../../application/interfaces/BarberShopRepositoryInterface";
import { UserRepositoryInterface } from "../../application/interfaces/UserRepositoryInterface";
import { BarberShop } from "../../domain/entities/BarberShop";

export default class barberRepository implements BarberShopRepositoryInterface {
    public async createBarberShop (barberShop: BarberShop): Promise<BarberShop> {
        const createdUser = barberShop
        return (createdUser)
    }
}