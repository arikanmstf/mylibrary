import t from 'helpers/i18n/Translate';

describe('test/app/helpers/i18n/Translate', () => {
  it('get', () => {
    expect(t.get('LOGIN_USERNAME_PLACEHOLDER')).toBe('LOGIN_USERNAME_PLACEHOLDER');
  });
});
