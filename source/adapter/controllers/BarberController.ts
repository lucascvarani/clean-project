import { Request, Response, NextFunction } from 'express';
import BarberUseCase from '../../application/useCases/BarberUseCase';
import BarberRepository from '../repositories/BarberRepository';
import { Appointment } from '../../domain/entities/Appointment';
import moment from 'moment';

const barberRepository = new BarberRepository();
const barberUseCase = new BarberUseCase(barberRepository);

export class BarberController {
  public async getBarbers(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    console.log(req.query);
    const barberShopId = String(req.query.barberShopId);
    const barbers = await barberUseCase.listBarbers(barberShopId);
    return res.status(200).json({
      data: barbers,
      message: 'Sucesso',
    });
  }

  public async createBarber(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    const { body } = req;
    const { nickname, user, barberShop } = body;
    const barber = await barberUseCase.createNewBarber(nickname, user, barberShop);
    return res.status(200).json({
      data: barber,
      message: 'Sucesso',
    });
  }

  public async makeAnAppointment (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    const { body } = req;
    const { appointment, barberId } = body;
    try {
      const barber = await barberUseCase.makeAnAppointment(new Appointment({...appointment, dateTime: moment(appointment.dateTime, 'DD/MM/YYYY HH:mm').toDate()}), barberId);
      return res.status(200).json({
        data: barber,
        message: 'Sucesso',
      });
    } catch(e: any) {
      return res.status(200).json({
        data: {},
        message: e.message,
      });
    }
    
  }
}
