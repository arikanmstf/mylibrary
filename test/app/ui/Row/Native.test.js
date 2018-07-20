/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Row from 'ui/Row/Native';

describe('test/app/ui/Row/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Row {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
