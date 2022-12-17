import { Router } from 'express';
import UserRoute from './UserRoute';
import ClientRoute from './ClientRoute';
import BarberRoute from './BarberRoute';
import BarberShopRoute from './BarberShopRoute';

const router = Router();

router.use('/', UserRoute);
router.use('/', ClientRoute);
router.use('/', BarberRoute);
router.use('/', BarberShopRoute);

export default router;
