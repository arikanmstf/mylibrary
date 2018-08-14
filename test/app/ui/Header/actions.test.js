import { mapStateToProps, mapDispatchToProps } from 'ui/Header/actions';
import * as screenActions from 'ui/Screen/actions';
import { createFakeStore, dispatch } from 'helpers/connect/fakeStore';

const state = createFakeStore({ screen: { isDrawerOpen: 'mockedValue' } }).getState();

describe('test/app/ui/Header/actions.test.js', () => {
  it('mapDispatchToProps', () => {
    screenActions.showDrawer = jest.fn();
    screenActions.showDrawer.mockClear();
    expect(mapDispatchToProps(dispatch)).toMatchSnapshot();
  });

  it('mapStateToProps', () => {
    expect(mapStateToProps(state)).toMatchSnapshot();
  });
});
