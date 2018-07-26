// eslint-disable-next-line import/no-dynamic-require
const config = require(`config/local.json`); // TODO

export default function () {
  return { ...config, ...config.android };
}
