import express from 'express'
import middleware from './middleware'
import apiRouter from './api'

const app = express()

// Configure middlewares
app.use(middleware.helmet)
app.use(middleware.cors)
app.use(middleware.compress)
app.use(middleware.json)
app.use(middleware.urlencoded)
app.use(middleware.favicon)
app.use('/', middleware.static)
app.use('/api', apiRouter)

export default app
