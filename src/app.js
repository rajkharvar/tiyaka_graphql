import express from 'express'
import * as bodyParser from 'body-parser'
import { connect } from 'mongoose'

import router from './routes'
import { MONGO_URL } from './config'

class App {
  constructor() {
    this.app = express()
    this.config()
    this.mountRoutes()
  }

  config() {
    // DB Connection
    connect(MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    // support application/json type post data
    this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  mountRoutes() {
    this.app.use(router)
  }
}

export default new App().app
