const Joi = require("joi");


const TeamSchema = Joi.object().keys({
  uuid: Joi.string().required(),
  abbreviation: Joi.string().required,
  name: Joi.string().required,
  location: Joi.string().required,
  logo: Joi.string().required,
  website: Joi.string().required,
  facebook: Joi.string().required,
  instagram: Joi.string().required,
  rosters:Joi.array().items(joi.)
});