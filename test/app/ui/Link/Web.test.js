/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Link from 'ui/Link/Web';

describe('test/app/ui/Link/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
