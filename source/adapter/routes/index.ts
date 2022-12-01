import { Router } from "express";
import UserRoute from './UserRoute'

const router = Router()

router.use('/', UserRoute)

export default router