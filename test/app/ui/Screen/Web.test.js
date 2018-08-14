/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Screen from 'ui/Screen/Web';

describe('test/app/ui/Screen/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Screen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
