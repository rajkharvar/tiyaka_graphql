import express from 'express'
import * as bodyParser from 'body-parser'

import router from './routes'

class App {
  constructor() {
    this.app = express()
    this.config()
    this.mountRoutes()
  }

  config() {
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
