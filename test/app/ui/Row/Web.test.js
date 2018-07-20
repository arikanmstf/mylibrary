/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Row from 'ui/Row/Web';

describe('test/app/ui/Row/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Row {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
