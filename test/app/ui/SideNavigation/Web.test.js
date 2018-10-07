/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import SideNavigation from 'ui/SideNavigation/Web';

describe('test/app/ui/SideNavigation/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<SideNavigation {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
