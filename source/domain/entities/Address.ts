import { v4 as uuidv4 } from 'uuid';

interface Data {
    id?: string
    streetNumber: string
    streetName: string
    zipCode: string
    city: string
}

export class Address {
    id: string
    streetNumber: string
    streetName: string
    zipCode: string
    city: string

    constructor (data: Data) {
        this.id = data.id ? data.id : uuidv4()
        this.streetNumber = data.streetNumber
        this.streetName = data.streetName
        this.zipCode = data.zipCode
        this.city = data.city
    }
}