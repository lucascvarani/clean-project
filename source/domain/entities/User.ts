import { v4 as uuidv4 } from 'uuid';

interface Data {
  id?: string;
  name: string;
  phone: string;
  password?: string;
}

export class User {
  id: string;
  name: string;
  phone: string;
  password?: string;

  constructor(data: Data) {
    this.id = data.id ? data.id : uuidv4();
    this.name = data.name;
    this.phone = data.phone;
    this.password = data.password;
  }
}
