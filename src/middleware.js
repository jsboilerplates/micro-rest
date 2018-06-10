
import config from 'config'
import util from './util'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import serveFavicon from 'serve-favicon'
import express from 'express'

export default {
  compress: compression(),
  helmet: helmet(),
  cors: cors(),
  favicon: serveFavicon(util.getFullPath(config.get('favicon'))),
  json: express.json(),
  urlencoded: express.urlencoded({extended: true}),
  static: express.static(util.getFullPath(config.get('static')))
}
