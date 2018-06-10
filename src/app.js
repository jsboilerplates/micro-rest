import express from 'express'
import middleware from './middleware'

const app = express()

// Configure middlewares
app.use(middleware.helmet)
app.use(middleware.cors)
app.use(middleware.compress)
app.use(middleware.json)
app.use(middleware.urlencoded)
app.use(middleware.favicon)
app.use('/', middleware.static)

export default app
