import Joi from "joi";

export const sendMessage = Joi.object({
  content: Joi.string().empty().required(),
  receiverId: Joi.string().required(),
  attachments: Joi.array().items(Joi.string().uri()).required().default([]),
});
