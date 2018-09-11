/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import RowList from 'ui/RowList/Native';

describe('test/app/ui/RowList/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<RowList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
