require('ignore-styles');
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});

const app = require('./app');

const PORT = process.env.PORT || 3001;

// Why don't I need http createServer
app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}!`)
});

app.on('error', onError);

exports = module.exports = app;

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT;

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
