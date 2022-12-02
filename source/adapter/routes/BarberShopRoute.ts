import express, { NextFunction, Request, Response } from 'express';
import { BarberShopController } from '../controllers/BarberShopController';
const router = express.Router();

const barberShopController = new BarberShopController()
router.post('/barberShop', async (req: Request, res: Response, next: NextFunction) => barberShopController.createBarberShop(req, res, next));

export = router;