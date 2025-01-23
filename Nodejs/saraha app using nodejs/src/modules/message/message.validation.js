import Joi from "joi";

export const addMessageSchema = Joi.object({
  message: Joi.string().required(),
  receiverId: Joi.string().length(24).required(),
  isFavourite: Joi.boolean(),
}).options({ allowUnknown: false });
