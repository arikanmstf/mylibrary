import t from 'helpers/i18n/Translate';

describe('src/helpers/i18n/Translate', () => {
  it('get', () => {
    expect(t.get('LOGIN_USERNAME_PLACEHOLDER')).toBe('Username');
  });
});
