/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Page from 'ui/Page/Web';

describe('test/app/ui/Page/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
