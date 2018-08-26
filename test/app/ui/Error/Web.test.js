/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Error from 'ui/Error/Web';

describe('test/app/ui/Error/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Error {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
