/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Register from 'screens/register/Register';

describe('test/app/screens/register/Register.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<Register {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
