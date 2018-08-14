import { isDevelopment, getEnv } from 'helpers/env';

describe('test/app/helpers/env/env.test.js', () => {
  it('isDevelopment', () => {
    expect(isDevelopment()).toBe(false);
  });

  it('getEnv', () => {
    expect(getEnv()).toEqual('live');
  });
});
