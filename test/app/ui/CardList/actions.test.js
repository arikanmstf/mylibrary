import {
  mapStateToProps,
  mapDispatchToProps,
  toggleFavorite,
  toggleRead,
} from 'ui/CardList/actions';
import * as homeActions from 'screens/home/homeActions';
import * as homeServices from 'screens/home/homeServices';
import { createFakeStore, dispatch } from 'helpers/connect/fakeStore';

const state = createFakeStore({
  home: {
    cards: [{
      isFavorite: false,
      isRead: false,
    }],
    search: 'dummySearch',
  },
  loader: { isLoaderVisible: false },
}).getState();

const getState = () => state;

describe('test/app/ui/CardList/actions.test.js', () => {
  homeActions.updateCards = jest.fn();
  homeActions.fetchAndAddCards = jest.fn();
  homeActions.fetchAndUpdateCards = jest.fn();
  homeServices.toggleFavorite = jest.fn(() => ({
    result: true,
  }));
  homeServices.toggleRead = jest.fn(() => ({
    result: true,
  }));

  beforeAll(() => {
    homeActions.updateCards.mockClear();
    homeActions.fetchAndAddCards.mockClear();
    homeActions.fetchAndUpdateCards.mockClear();
    homeServices.toggleFavorite.mockClear();
    homeServices.toggleRead.mockClear();
  });

  it('mapDispatchToProps', () => {
    expect(mapDispatchToProps).toMatchSnapshot();
  });

  it('mapStateToProps', () => {
    expect(mapStateToProps(state)).toMatchSnapshot();
  });

  it('toggleFavorite', async () => {
    await toggleFavorite(1, 0)(dispatch, getState);
    expect(homeServices.toggleFavorite).toBeCalledWith(1);
    expect(homeActions.updateCards).toBeCalledWith([{
      isFavorite: true,
      isRead: false,
    }]);
  });

  it('toggleRead', async () => {
    state.toJS().home.cards = [{
      isFavorite: false,
      isRead: false,
    }];

    await toggleRead(1, 0)(dispatch, getState);
    expect(homeServices.toggleRead).toBeCalledWith(1);
    expect(homeActions.updateCards).toBeCalledWith([{
      isFavorite: false,
      isRead: true,
    }]);
  });
});
