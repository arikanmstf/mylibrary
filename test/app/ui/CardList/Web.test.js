/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import CardList from 'ui/CardList/Web';
import { createFakeStore } from 'helpers/connect/fakeStore';

describe('test/app/ui/CardList/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const store = createFakeStore({ loader: { isVisible: false }, home: { cards: [] } });
    const wrapper = shallow(<CardList {...props} store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
