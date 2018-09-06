import {
  mapStateToProps,
  mapDispatchToProps,
} from 'ui/CardList/actions';
import * as homeActions from 'screens/home/homeActions';
import { createFakeStore } from 'helpers/connect/fakeStore';

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

describe('test/app/ui/CardList/actions.test.js', () => {
  homeActions.updateCards = jest.fn();
  homeActions.fetchAndAddCards = jest.fn();
  homeActions.fetchAndUpdateCards = jest.fn();

  beforeAll(() => {
    homeActions.updateCards.mockClear();
    homeActions.fetchAndAddCards.mockClear();
    homeActions.fetchAndUpdateCards.mockClear();
  });

  it('mapDispatchToProps', () => {
    expect(mapDispatchToProps).toMatchSnapshot();
  });

  it('mapStateToProps', () => {
    expect(mapStateToProps(state)).toMatchSnapshot();
  });
});
