import Joi from "joi";

export const userRegistrationContract = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().required(),
  profilePic: Joi.string().required(),
});
