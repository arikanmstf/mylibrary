import {
  mapStateToProps,
  mapDispatchToProps,
  toggleFavorite,
  toggleRead,
} from 'ui/CardDetail/actions';
import * as homeActions from 'screens/home/homeActions';
import * as homeServices from 'screens/home/homeServices';
import { createFakeStore, dispatch } from 'helpers/connect/fakeStore';

const state = createFakeStore({
  home: {
    cards: [{
      isFavorite: false,
      isRead: false,
      id: 1,
    }],
    search: 'dummySearch',
  },
  loader: { isLoaderVisible: false },
}).getState();

const getState = () => state;

describe('test/app/ui/CardDetail/actions.test.js', () => {
  homeActions.updateCards = jest.fn();
  homeServices.toggleFavorite = jest.fn(() => ({
    result: true,
  }));
  homeServices.toggleRead = jest.fn(() => ({
    result: true,
  }));

  beforeAll(() => {
    homeActions.updateCards.mockClear();
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
    await toggleFavorite(1)(dispatch, getState);
    expect(homeServices.toggleFavorite).toBeCalledWith(1);
    expect(homeActions.updateCards).toBeCalledWith([{
      isFavorite: true,
      isRead: false,
      id: 1,
    }]);
  });

  it('toggleRead', async () => {
    state.toJS().card.cards = [{
      isFavorite: false,
      isRead: false,
      id: 1,
    }];

    await toggleRead(1)(dispatch, getState);
    expect(homeServices.toggleRead).toBeCalledWith(1);
    expect(homeActions.updateCards).toBeCalledWith([{
      isFavorite: false,
      isRead: true,
      id: 1,
    }]);
  });
});
