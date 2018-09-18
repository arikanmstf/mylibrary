/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Routes from 'ui/Routes/Web';

describe('test/app/ui/Routes/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Routes {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
