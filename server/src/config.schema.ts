import * as joi from 'joi';

export const configSchema = joi.object({
  STAGE: joi.string().required(),
  MONGO_URI: joi.string().required(),
});
