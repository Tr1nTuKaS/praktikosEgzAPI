const joi = require("joi");

// eslint-disable-next-line consistent-return
async function validateNewPost(req, res, next) {
  const postsSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    age: joi.required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).max(255).required(),
  });
  try {
    await postsSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).send({ error });

    return false;
  }
}

module.exports = {
  validateNewPost,
};
