import { v4 as uuidv4 } from 'uuid';
import { BarberShop } from './BarberShop';
import { User } from './User';

interface Data {
  id?: string;
  nickname: string;
  user: User;
  barberShop: BarberShop;
}

export class Client {
  id: string;
  nickname: string;
  user: User;
  barberShop: BarberShop;

  constructor(data: Data) {
    this.id = data.id ? data.id : uuidv4();
    this.nickname = data.nickname;
    this.user = data.user;
    this.barberShop = data.barberShop;
  }
}
