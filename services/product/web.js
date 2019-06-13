'use strict'

const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ silent: true })
}

const { promisify } = require('util')
const http = require('http')
const logger = require('winston')
const app = require('./server')
const config = require('./config/server')

logger.default.transports.console.colorize = true
logger.level = config.logger.level

const server = http.createServer(app.callback())
const serverListen = promisify(server.listen).bind(server)

serverListen(config.port)
  .then(() => {
    logger.info(`Products service is up and running on localhost:${config.port}`)
  })
  .catch((err) => {
    logger.error(err)
    process.exit(1)
  })

// Graceful shutdown
var signals = {
'SIGHUP': 1,
'SIGINT': 2,
'SIGTERM': 15
};
// Do any necessary shutdown logic for our application here
const shutdown = (signal, value) => {
console.log("shutdown!");
server.close(() => {
    console.log(`server stopped by ${signal} with value ${value}`);
    process.exit(128 + value);
});
};
// Create a listener for each of the signals that we want to handle
Object.keys(signals).forEach((signal) => {
process.on(signal, () => {
    console.log(`process received a ${signal} signal`);
    shutdown(signal, signals[signal]);
});
});