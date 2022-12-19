import { Address } from '../../domain/entities/Address';
import { BarberShop } from '../../domain/entities/BarberShop';
import { BarberShopRepositoryInterface } from '../interfaces/BarberShopRepositoryInterface';

export default class BarberShopUseCase {
  barberShopRepositoryInterface: BarberShopRepositoryInterface;
  constructor(barberShopRepositoryInterface: BarberShopRepositoryInterface) {
    this.barberShopRepositoryInterface = barberShopRepositoryInterface;
  }

  public async createNewBarberShop(name: string,
    streetNumber: string,
    streetName: string,
    zipCode: string,
    city: string): Promise<BarberShop> {

    const barberShopAddress = new Address({
      streetNumber: streetNumber,
      streetName: streetName,
      zipCode: zipCode,
      city: city,
    });
    const barberShop = new BarberShop({
      name: name,
      address: barberShopAddress,
    });

    return this.barberShopRepositoryInterface.createBarberShop(barberShop);
  }
}
