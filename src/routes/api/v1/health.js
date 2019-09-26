import { Router } from 'express'

import { routeNames } from '../../../config'
import { healthCheckController } from '../../../controller'

const router = Router()
const { HEALTH } = routeNames

router.route(HEALTH)
  .get(healthCheckController)

export default router
