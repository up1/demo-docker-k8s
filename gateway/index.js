const express = require('express')

const api = require('./api')
const { serverPort, productsAPIURL, usersAPIURL } = require('./config')

const app = express()

// Routing
app.get('/', (req, res) => res.send('Hello API Gateway...'))
app.use('/api', api)

const listener = app.listen(serverPort, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(
    'Server is listening on port http://localhost:%d',
    listener.address().port
  )
  console.log('Server will be looking for productService at %s', productsAPIURL)
  console.log('Server will be looking for userService at %s', usersAPIURL)
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
  listener.close(() => {
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