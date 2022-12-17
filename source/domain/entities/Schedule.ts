import { Appointment } from './Appointment';

interface Data {
  appointmentList?: Appointment[];
}

export class Schedule {
  appointmentList: Appointment[];

  constructor(data: Data) {
    this.appointmentList = data.appointmentList ? data.appointmentList : [];
  }
}
