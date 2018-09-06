import * as registerActions from 'screens/register/registerActions';
import * as registerServices from 'screens/register/registerServices';
import { createFakeStore, dispatch } from 'helpers/connect/fakeStore';
import storage, { LOGIN_STATE } from 'helpers/storage';

const form = createFakeStore({ mockedField: 'mockedValue' }).getState();

describe('test/app/screens/register/registerActions.test.js', () => {
  describe('submitRegisterForm', () => {
    beforeEach(() => {
      registerServices.registerRequest = jest.fn((r) => r);
      registerServices.registerRequest.mockClear();
    });
    it('should call loginRequest', async () => {
      await registerActions.submitRegisterForm(form, dispatch);
      expect(registerServices.registerRequest).toBeCalledWith(form.toJS());
    });
    it('should save response to storage', async () => {
      await registerActions.submitRegisterForm(form, dispatch);
      const loadedStorage = await storage.load({ key: LOGIN_STATE });
      expect(loadedStorage).toEqual({ mockedField: 'mockedValue' });
    });
  });
});
