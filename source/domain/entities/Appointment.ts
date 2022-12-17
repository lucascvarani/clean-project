import { Client } from './Client';

interface Data {
  dateTime: Date;
  client: Client;
}

export class Appointment {
  dateTime: Date;
  client: Client;

  constructor(data: Data) {
    this.dateTime = data.dateTime ? data.dateTime : new Date();
    this.client = data.client;
  }
}
