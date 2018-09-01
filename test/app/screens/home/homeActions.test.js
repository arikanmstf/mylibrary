import * as homeActions from 'screens/home/homeActions';
import * as homeServices from 'screens/home/homeServices';
import * as loaderActions from 'ui/Loader/actions';
import { dispatch } from 'helpers/connect/fakeStore';

describe('test/app/screens/home/homeActions.test.js', () => {
  describe('fetchAndUpdateCards', () => {
    homeServices.getPublicationList = jest.fn(() => ({
      content: 'dummyContent',
      totalPages: 'dummyTotalPages',
    }));

    loaderActions.showLoader = jest.fn();
    loaderActions.hideLoader = jest.fn();

    beforeEach(() => {
      loaderActions.showLoader.mockClear();
      loaderActions.hideLoader.mockClear();
      homeServices.getPublicationList.mockClear();
    });

    it('should call getPublicationList', async () => {
      const page = 1;
      const search = 'dummySearch';
      await homeActions.fetchAndUpdateCards({ search })(dispatch);

      expect(loaderActions.showLoader).toHaveBeenCalled();
      expect(loaderActions.hideLoader).toHaveBeenCalled();
      expect(homeServices.getPublicationList).toHaveBeenCalledWith({ page, search });
    });
  });
});
