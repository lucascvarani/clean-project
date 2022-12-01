import express, { NextFunction, Request, Response } from 'express';
import {UserController} from '../controllers/UserController';
const router = express.Router();

const userController = new UserController()

router.get('/users', async (req: Request, res: Response, next: NextFunction) => userController.getUsers(req, res, next));
router.post('/users', async (req: Request, res: Response, next: NextFunction) => userController.createUser(req, res, next));

export = router;