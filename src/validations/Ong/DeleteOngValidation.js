const { Segments, Joi } = require('celebrate');

const deleteOngValidation = {
  [Segments.HEADERS]: Joi.object()
    .keys({
      cookie: Joi.string().required(),
    })
    .unknown(),
};

module.exports = deleteOngValidation;
