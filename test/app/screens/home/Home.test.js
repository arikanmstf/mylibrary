/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Home from 'screens/home/Home';

describe('test/app/screens/home/Home.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
