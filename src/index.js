import logger from 'winston'
import app from './app'
import config from 'config'

const server = app.listen(config.get('port'))

server.on('listening', function () {
  return logger.info('Application started on http://%s:%d', config.get('host'), config.get('port'))
})
