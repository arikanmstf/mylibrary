import * as logoutActions from 'screens/logout/logoutActions';
import * as logoutServices from 'screens/logout/logoutServices';
import { dispatch } from 'helpers/connect/fakeStore';

describe('test/app/screens/logout/logoutActions.test.js', () => {
  describe('makeLogoutRequest', () => {
    beforeEach(() => {
      logoutServices.logoutRequest = jest.fn();
      logoutServices.logoutRequest.mockClear();
    });

    it('should call logoutRequest', async () => {
      await logoutActions.makeLogoutRequest()(dispatch);
      expect(logoutServices.logoutRequest).toBeCalled();
    });
  });
});
