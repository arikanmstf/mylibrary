/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Form from 'ui/Form/Web';

describe('test/app/ui/Form/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
