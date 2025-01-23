export const validation = (schema) => {
  // validation logic here
  return (req, res, next) => {
    const validation = schema.validate(req.body, {
      abortEarly: false,
    });
    if (validation.error && validation.error.message) {
      let errorMessage = validation.error.details.map((el) => el.message);
      return res
        .status(422)
        .json({ massage: "validation.error", error: errorMessage });
    } else {
      next();
    }
  };
};
