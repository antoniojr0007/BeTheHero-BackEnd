const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');

const routes = require('./routes');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3333',
      'http://192.168.0.15:19000',
      'http://192.168.0.15:19001',
      'http://192.168.0.15:19002',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    exposedHeaders: ['Access-Control-Allow-Origin', 'X-Total-Count'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(routes);
app.use(errors());
app.use(helmet());

app.disable('x-powered-by');

module.exports = app;
