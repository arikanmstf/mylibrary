/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import RowDetail from 'ui/RowDetail/Native';

describe('test/app/ui/RowDetail/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<RowDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
