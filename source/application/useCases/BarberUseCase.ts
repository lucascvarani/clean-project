import { BarberShop } from '../../domain/entities/BarberShop';
import { Barber } from '../../domain/entities/Barber';
import { User } from '../../domain/entities/User';
import { BarberRepositoryInterface } from '../interfaces/BarberRepositoryInterface';
import { Appointment } from '../../domain/entities/Appointment';

export default class BarberUseCase {
  barberRepositoryInterface: BarberRepositoryInterface;
  constructor(barberRepositoryInterface: BarberRepositoryInterface) {
    this.barberRepositoryInterface = barberRepositoryInterface;
  }

  public async listBarbers(barberShopId: string): Promise<Barber[]> {
    const barbers = await this.barberRepositoryInterface.getBarbers(barberShopId);
    return barbers;
  }

  public async createNewBarber(nickname: string, user: User, barberShop: BarberShop): Promise<Barber> {
    const barberToCreate = new Barber({ nickname, user, barberShop });
    return await this.barberRepositoryInterface.createBarber(barberToCreate);
  }

  public async makeAnAppointment(appointment: Appointment, barberId: string): Promise<Barber> {
    const barber = await this.barberRepositoryInterface.getBarberById(barberId)
  
    this.checkDisponibility(appointment, barber.schedule.appointmentList)
  
    barber.makeAnAppointment(appointment)
    const updatedBarber = await this.barberRepositoryInterface.updateBarber(barber)
    return updatedBarber
  }

  private checkDisponibility(appointment: Appointment, appointmentList: Appointment[]): void {
    const filteredAppointments = appointmentList.filter(appointmentValue => appointmentValue.dateTime.toString() === appointment.dateTime.toString())
    if (filteredAppointments.length !== 0) {
      throw Error('Este horário não está disponível')
    }
  }

}
