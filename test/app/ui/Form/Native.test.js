/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Form from 'ui/Form/Native';

describe('test/app/ui/Form/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
