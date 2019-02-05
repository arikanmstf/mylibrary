/**
 * Web Component Test Template By => create-module script
 * @version 1.2.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Icon from 'ui/Icon/Icon';

describe('test/app/ui/Icon/Icon.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
