/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'ui/Modal/Native';

describe('test/app/ui/Modal/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
