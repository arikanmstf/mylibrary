/**
 * Screen Test Template By => create-module script
 * @version 1.2.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Profile from 'screens/profile/Profile';

describe('test/app/screens/profile/Profile.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
