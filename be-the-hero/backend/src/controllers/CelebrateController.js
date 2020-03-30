const { celebrate, Segments, Joi } = require ('celebrate');

class CelebrateValidator {

  sessionPost() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      })
    });
  }

  ongsPost(){
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    });
  }

  profileGet() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  }

  incidentsGet() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
  }

  incidentsPost() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().min(10),
        value: Joi.number().required(),
      }),
    });
  }

  incidentsDelete() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    });
  }
}

module.exports = new CelebrateValidator();