import joi from "joi";
export const signUpValidation = joi
  .object({
    userName: joi.string().min(3).max(30).required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: ["com", "eg"] })
      .required(),
    password: joi
      .string()
      .min(8)
      .pattern(
        new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
        )
      )
      .required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required(),
    phone: joi.string().optional().allow(null, ""),
  })
  .options({ allowUnknown: false });

export const signInValidation = joi
  .object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: ["com", "eg"] })
      .required(),
    password: joi
      .string()
      .min(8)
      // .pattern(new RegExp(/^[A-z][a-z0-9]$/))
      .required(),
  })
  .options({ allowUnknown: false });
