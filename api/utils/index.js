/* eslint-disable no-param-reassign */
const setResponse = (status, message = '', data = {}, userMessage = '') => {
  if (!userMessage) userMessage = message;
  return { data, status, message, userMessage };
};

module.exports = {
  setResponse,
};
