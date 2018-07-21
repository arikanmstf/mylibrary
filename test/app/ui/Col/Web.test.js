/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Col from 'ui/Col/Web';

describe('test/app/ui/Col/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Col {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
