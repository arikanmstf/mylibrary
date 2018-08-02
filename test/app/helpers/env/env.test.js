import { isDevelopment, getEnv } from 'helpers/env';

describe('src/helpers/env', () => {
  it('isDevelopment', () => {
    expect(isDevelopment()).toBe(false);
  });

  it('getEnv', () => {
    expect(getEnv()).toEqual('live');
  });
});
