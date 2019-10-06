import { Router } from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './api/schema/index'

import api from './api'
import { notFoundController } from '../controller'

const router = Router()

router.use('/api', api)
router.get('/graphql', graphqlHTTP({ schema, graphiql: true, pretty: true }))
router.post('/graphql', graphqlHTTP({ schema, graphiql: true, pretty: true }))
router.use('*', notFoundController)


export default router
