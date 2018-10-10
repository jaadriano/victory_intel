'use strict';
// const bcrypt = require('./@vlg/helpers/index');
const express = require('express');
const db_mysql = require('mysql');
const routes = require('./@vlg/routes/routes');
const bodyParser = require("body-parser");
const messageBird = require('./@vlg/middleware/messagebird/index');
const app = express();

var http = require('http');
var models = require('./@vlg/db/index');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routes);
 
//Get port from environment and store in Express.
if (module === require.main) {
	var port = normalizePort(process.env.PORT || '8080');
	app.set('port', port);
	//create http server
	var server = http.createServer(app);
}

models.sequelize.sync().then(function() {
  //Listen on provided port, on all network interfaces.
  server.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

module.exports = app;
