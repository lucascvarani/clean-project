import { Router } from "express";
import UserRoute from './UserRoute'
import BarberShopRoute from './BarberShopRoute'

const router = Router()

router.use('/', UserRoute)
router.use('/', BarberShopRoute)

export default router