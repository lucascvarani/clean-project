import { v4 as uuidv4 } from 'uuid';
import { Appointment } from './Appointment';
import { BarberShop } from './BarberShop';
import { Schedule } from './Schedule';
import { User } from './User';

interface BarberInterface {
  makeAnAppointment(appointment: Appointment): void
}

interface Data {
  id?: string;
  nickname: string;
  user: User;
  barberShop: BarberShop;
  schedule?: Schedule;
}

export class Barber implements BarberInterface {
  id: string;
  nickname: string;
  user: User;
  barberShop: BarberShop;
  schedule: Schedule;

  constructor(data: Data) {
    this.id = data.id ? data.id : uuidv4();
    this.nickname = data.nickname;
    this.user = data.user;
    this.barberShop = data.barberShop;
    this.schedule = data.schedule ? data.schedule : new Schedule({});
  }

  public makeAnAppointment (appointment: Appointment): void  {
    this.schedule.appointmentList.push(appointment)
  }

}
