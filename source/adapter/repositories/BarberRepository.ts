import { BarberRepositoryInterface } from "../../application/interfaces/BarberRepositoryInterface";
import { Address } from "../../domain/entities/Address";
import { BarberShop } from "../../domain/entities/BarberShop";
import { Barber } from "../../domain/entities/Barber";
import { User } from "../../domain/entities/User";
import { Schedule } from "../../domain/entities/Schedule";
import { Appointment } from "../../domain/entities/Appointment";
import { Client } from "../../domain/entities/Client";
import moment from "moment";

export default class BarberRepository implements BarberRepositoryInterface {
    public async getBarbers (barberShopId: string): Promise<Barber[]> {

        // Lógica para resgatar barbeiros da barbearia do banco

        const barbers =[new Barber({
                id: '333333',
                nickname: 'Michael',
                user: new User({ id: '1237', name: 'Michael Fernades', phone: '1999999-9998' }),
                barberShop: new BarberShop({ id: barberShopId, name: 'Gold BarberShop', address: new Address({ id: '111', streetNumber: '120', streetName: 'Rua Pajé', zipCode: '13033555', city: 'Campinas' }) }),
                schedule: new Schedule({ appointmentList: 
                    [
                        new Appointment({ 
                            dateTime: moment('14/02/2022 14:00', 'DD/MM/YYYY HH:mm').toDate(),
                            client: new Client({
                                id: '111111',
                                nickname: 'Jaozinho',
                                user: new User({ id: '123', name: 'João Silva', phone: '1999999-9999' }),
                                barberShop: new BarberShop({ id: barberShopId, name: 'Gold BarberShop', address: new Address({ id: '111', streetNumber: '120', streetName: 'Rua Pajé', zipCode: '13033555', city: 'Campinas' }) })
                            }) 
                        })
                    ] 
                })
            }),
            new Barber({
                id: '444444',
                nickname: 'Toby',
                user: new User({ id: '1247', name: 'Marcio Almeida', phone: '1998888-8887' }),
                barberShop: new BarberShop({ id: barberShopId, name: 'Gold BarberShop', address: new Address({ id: '111', streetNumber: '120', streetName: 'Rua Pajé', zipCode: '13033555', city: 'Campinas' }) }),
                schedule: new Schedule({ appointmentList: 
                    [
                        new Appointment({ 
                            dateTime:  moment('14/02/2022 15:00', 'DD/MM/YYYY HH:mm').toDate(),
                            client: new Client({
                                id: '222222',
                                nickname: 'Jaozinho',
                                user: new User({ id: '124', name: 'Marcio Almeida', phone: '1998888-8888' }),
                                barberShop: new BarberShop({ id: barberShopId, name: 'Gold BarberShop', address: new Address({ id: '111', streetNumber: '120', streetName: 'Rua Pajé', zipCode: '13033555', city: 'Campinas' }) })
                            }) 
                        })
                    ] 
                })
            })
        ]
        return barbers.map(barber => ({ id: barber.id, nickname: barber.nickname, user: barber.user, barberShop: barber.barberShop, schedule: barber.schedule, makeAnAppointment: Barber.prototype.makeAnAppointment }))
    }

    public async createBarber (barber: Barber): Promise<Barber> {

        // Lógica para armazenar barbeiro no banco
        // Sugestão: guardar apenas o id da barbearia e do usuário

        const createdBarber = {
            id: barber.id,
            nickname: barber.nickname,
            user: barber.user,
            barberShop: barber.barberShop,
            schedule: barber.schedule
        }

        return ({ id: createdBarber.id, nickname: createdBarber.nickname, user: createdBarber.user, barberShop: createdBarber.barberShop, schedule: createdBarber.schedule, makeAnAppointment: Barber.prototype.makeAnAppointment })
    }

    public async getBarberById (barberId: string): Promise<Barber> {
        const barber = new Barber({
            id: barberId,
            nickname: 'Michael',
            user: new User({ id: '1237', name: 'Michael Fernades', phone: '1999999-9998' }),
            barberShop: new BarberShop({ id: '1234', name: 'Gold BarberShop', address: new Address({ id: '111', streetNumber: '120', streetName: 'Rua Pajé', zipCode: '13033555', city: 'Campinas' }) }),
            schedule: new Schedule({ appointmentList: 
                [
                    new Appointment({ 
                        dateTime: moment('14/02/2022 14:00', 'DD/MM/YYYY HH:mm').toDate(),
                        client: new Client({
                            id: '111111',
                            nickname: 'Jaozinho',
                            user: new User({ id: '123', name: 'João Silva', phone: '1999999-9999' }),
                            barberShop: new BarberShop({ id: '7777', name: 'Gold BarberShop', address: new Address({ id: '111', streetNumber: '120', streetName: 'Rua Pajé', zipCode: '13033555', city: 'Campinas' }) })
                        }) 
                    })
                ] 
            })
        })

        return barber
    }

    public async updateBarber (barber: Barber): Promise<Barber> {

        // Lógica para fazer update do barbeiro

        return barber
    }

}
