/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import ModalError from 'ui/ModalError/Web';

describe('test/app/ui/ModalError/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<ModalError {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
