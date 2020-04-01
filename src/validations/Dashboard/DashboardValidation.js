const { Segments, Joi } = require('celebrate');

const dashboardValidation = {
  [Segments.HEADERS]: Joi.object({
    cookie: Joi.string().required(),
  }).unknown(),
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
};

module.exports = dashboardValidation;
