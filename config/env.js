const { config } = require('dotenv');

const { parsed } = config();

const requiredEnvs = ['PORT'];

requiredEnvs.forEach(requiredEnv => {
  if (!parsed[requiredEnv]) {
    throw new Error(`The ENV property ${requiredEnv} is required.
    Please provide a value according file .env.template!`);
  }
});

module.exports = {
  env: parsed
};
