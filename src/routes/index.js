import { Router } from 'express'

import api from './api'
import { notFoundController } from '../controller'

const router = Router()

router.use('/api', api)
router.use('*', notFoundController)

export default router
