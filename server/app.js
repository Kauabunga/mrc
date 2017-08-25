const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const enforce = require('express-sslify');

// routes
const index = require('./routes/index');
const api = require('./routes/api');
const universalLoader = require('./universal');


const app = express();

if(process.env.NODE_ENV !== 'development') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Enable default helmet security
app.use(helmet());

// Helmet CSP configuration
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "www.google-analytics.com",
        // Inline scripts for pace.js
        "'sha256-XRde9ySV7fsYkf9zoIYqSuGJqpsFTWLgm0kFGIiarjw='",
        "'sha256-ovdkvTFmnmqLAqYtUMvpOMWZhNQHMHw3FkLBfmp48xM='",
      ],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: [
        "'self'",
        "www.google-analytics.com",
        'data:',
      ],
      objectSrc: ["'none'"],
      reportUri: '/report-violation',
    }
  })
);

// Support Gzip
app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup logger
app.use(morgan('combined'));

app.use('/', index);

// Serve static assets
const oneDay = 86400000 * 365; // in milliseconds

app.use(express.static(
  path.resolve(__dirname, '..', 'build'), {maxage: oneDay}
  )
);

app.post('/report-violation', function (req, res) {
  if (req.body) {
    console.log('CSP Violation: ', req.body)
  } else {
    console.log('CSP Violation: No data received!')
  }
  res.status(204).end();
});

app.use('/api', api);

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader);

module.exports = app;
