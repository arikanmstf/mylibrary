/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import RowList from 'ui/RowList/Web';

describe('test/app/ui/RowList/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<RowList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
