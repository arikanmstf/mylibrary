/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Header from 'ui/Header/Web';

describe('test/app/ui/Header/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
