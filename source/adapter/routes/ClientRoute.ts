import express, { NextFunction, Request, Response } from 'express';
import { ClientController } from '../controllers/ClientController';
const router = express.Router();

const clientController = new ClientController();

router.get('/clients', async (req: Request, res: Response, next: NextFunction) =>
  clientController.getClients(req, res, next)
);
router.post('/clients', async (req: Request, res: Response, next: NextFunction) =>
  clientController.createClient(req, res, next)
);

export = router;
