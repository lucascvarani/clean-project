import { Address } from '../../domain/entities/Address';
import { BarberShop } from '../../domain/entities/BarberShop';
import { BarberShopRepositoryInterface } from '../interfaces/BarberShopRepositoryInterface';

interface BarberShopProperties {
  name: string;
  streetNumber: string;
  streetName: string;
  zipCode: string;
  city: string;
}

export default class BarberShopUseCase {
  barberShopRepositoryInterface: BarberShopRepositoryInterface;
  constructor(barberShopRepositoryInterface: BarberShopRepositoryInterface) {
    this.barberShopRepositoryInterface = barberShopRepositoryInterface;
  }

  public async createNewBarberShop(barberShopProperties: BarberShopProperties): Promise<BarberShop> {
    const barberShopAddress = new Address({
      streetNumber: barberShopProperties.streetNumber,
      streetName: barberShopProperties.streetName,
      zipCode: barberShopProperties.zipCode,
      city: barberShopProperties.city,
    });
    const barberShop = new BarberShop({
      name: barberShopProperties.name,
      address: barberShopAddress,
    });

    return this.barberShopRepositoryInterface.createBarberShop(barberShop);
  }
}
