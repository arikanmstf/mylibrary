/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import CardDetail from 'ui/CardDetail/Web';

describe('test/app/ui/CardDetail/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<CardDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
