/**
 * Native Component Test Template By => create-module script
 * @version 1.2.1
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import ImageScrollHeader from 'ui/ImageScrollHeader/ImageScrollHeader.native';

describe('test/app/ui/ImageScrollHeader/ImageScrollHeader.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<ImageScrollHeader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
