/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import CardList from 'ui/CardList/Native';
import { createFakeStore } from 'helpers/connect/fakeStore';

describe('test/app/ui/CardList/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const store = createFakeStore({ loader: { isVisible: false }, home: { cards: [] } });
    const wrapper = shallow(<CardList {...props} store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
