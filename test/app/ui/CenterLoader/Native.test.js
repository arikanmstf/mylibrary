/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import CenterLoader from 'ui/CenterLoader/Native';

describe('test/app/ui/CenterLoader/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<CenterLoader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
