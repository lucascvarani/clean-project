import { v4 as uuidv4 } from 'uuid';
import { Address } from './Address';

interface Data {
    id?: string
    name: string
    address: Address
}

export class BarberShop {
    id?: string
    name: string
    address: Address

    constructor (data: Data) {
        this.id = data.id ? data.id : uuidv4()
        this.name = data.name
        this.address = data.address
    }
}