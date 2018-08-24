/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import KeyboardScreen from 'ui/KeyboardScreen/Native';

describe('test/app/ui/KeyboardScreen/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<KeyboardScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
