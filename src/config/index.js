module.exports = {
  appInfo: {
    appUrl: process.env.TOKEN_EXPIRED,
    appPort: process.env.TOKEN_EXPIRED,
  },
  token: {
    secret: process.env.TOKEN_SECRET,
    expired: process.env.TOKEN_EXPIRED,
  },
  mail: {
    from: '"Be The Hero 💪" <hero@bethehero.com>',
  },
  smtp: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USER,
      password: process.env.MAIL_PASS,
    },
  },
};
