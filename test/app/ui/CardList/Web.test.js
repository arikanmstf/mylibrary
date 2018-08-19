/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import CardList from 'ui/CardList/Web';

describe('test/app/ui/CardList/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<CardList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
