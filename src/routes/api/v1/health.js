import { Router } from 'express'

const router = Router()

router.route('/health')
  .get((req, res) => res.send('health check'))

export default router
