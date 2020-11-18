/* eslint-disable no-param-reassign */
const setResponse = (status, message = '', data = {}, userMessage = '') => {
  if (!userMessage) userMessage = message;
  return { data, status, message, userMessage };
};

const buildController = (Service, serviceName) => {
  const ans = {};
  ans[serviceName] = async (req, res) => {
    const response = await Service[serviceName](req);
    return res.status(response.status).send(response);
  };
  return ans;
};

module.exports = {
  setResponse,
  buildController,
};
