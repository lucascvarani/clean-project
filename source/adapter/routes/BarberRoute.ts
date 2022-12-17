import express, { NextFunction, Request, Response } from 'express';
import { BarberController } from '../controllers/BarberController';
const router = express.Router();

const barberController = new BarberController();

router.get('/barbers', async (req: Request, res: Response, next: NextFunction) =>
  barberController.getBarbers(req, res, next)
);
router.post('/barbers', async (req: Request, res: Response, next: NextFunction) =>
  barberController.createBarber(req, res, next)
);
router.post('/barbers/makeAnAppointment', async (req: Request, res: Response, next: NextFunction) =>
  barberController.makeAnAppointment(req, res, next)
);

export = router;
