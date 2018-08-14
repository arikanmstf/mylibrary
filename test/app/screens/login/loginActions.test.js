import * as loginActions from 'screens/login/loginActions';
import * as loginServices from 'screens/login/loginServices';
import { createFakeStore, dispatch } from 'helpers/connect/fakeStore';
import storage, { LOGIN_STATE } from 'helpers/storage';

const form = createFakeStore({ mockedField: 'mockedValue' }).getState();

describe('test/app/screens/login/loginActions.test.js', () => {
  describe('submitLoginForm', () => {
    beforeEach(() => {
      loginServices.loginRequest = jest.fn((r) => r);
      loginServices.loginRequest.mockClear();
    });
    it('should call loginRequest', async () => {
      await loginActions.submitLoginForm(form, dispatch);
      expect(loginServices.loginRequest).toHaveBeenCalledWith(form.toJS());
    });
    it('should save response to storage', async () => {
      await loginActions.submitLoginForm(form, dispatch);
      const loadedStorage = await storage.load({ key: LOGIN_STATE });
      expect(loadedStorage).toEqual({ mockedField: 'mockedValue' });
    });
  });

  describe('fetchInitialState', () => {
    beforeEach(() => {
      loginServices.initialRequest = jest.fn((r) => r);
      loginServices.initialRequest.mockClear();
    });

    it('should call initialRequest', async () => {
      dispatch(loginActions.fetchInitialState());
      expect(loginServices.initialRequest).toHaveBeenCalledWith();
    });
  });
});
