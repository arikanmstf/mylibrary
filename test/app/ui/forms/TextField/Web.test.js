/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import TextField from 'ui/forms/TextField/Web';

describe('test/app/ui/forms/TextField/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
