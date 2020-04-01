require('dotenv/config');
const config = require('../config');
const mailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

const config = {
  host: config.smtp.host,
  port: config.smtp.port,
  auth: {
    user: config.smtp.auth.user,
    pass: config.smtp.auth.password,
  },

  tls: { rejectUnauthorized: false },
};

const transport = mailer.createTransport(config);

const handlebarOptions = {
  viewEngine: {
    extName: '.html',
    partialsDir: './src/views/templates/mails/',
    layoutsDir: './src/views/templates/mails/',
    defaultLayout: '',
  },
  viewPath: './src/views/templates/mails/',
  extName: '.html',
};

transport.use('compile', hbs(handlebarOptions));

module.exports = transport;