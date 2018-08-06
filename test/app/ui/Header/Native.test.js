/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Header from 'ui/Header/Native';

describe('test/app/ui/Header/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
