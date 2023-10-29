import Joi from "joi";

export const getUserRooms = Joi.object({
  userId: Joi.string().required(),
});
