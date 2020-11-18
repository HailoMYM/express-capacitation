const { isCelebrateError } = require('celebrate');

const EscapeHtml = require('escape-html');

module.exports = (err, req, res, next) => {
  // If this isn't a Celebrate error, send it to the next error handler
  if (!isCelebrateError(err)) return next(err);

  const validation = {};
  let message = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const [segment, joiError] of err.details.entries()) {
    validation[segment] = {
      source: segment,
      keys: joiError.details.map((detail) => EscapeHtml(detail.path.join('.'))),
      message: joiError.message,
    };
    message = `${message} ${joiError.message}`;
  }

  const result = {
    status: 400,
    message,
    data: validation,
  };

  return res.status(400).send(result);
};
