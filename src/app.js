import express from 'express'

import router from './routes'

class App {
  constructor() {
    this.app = express()
    this.config()
    this.mountRoutes()
  }

  config() {
    console.log('Configuring')
  }

  mountRoutes() {
    this.app.use(router)
  }
}

export default new App().app
