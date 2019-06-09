/**
 * Native Component Test Template By => create-module script
 * @version 1.2.1
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import SelectField from 'ui/SelectField/SelectField.native';

describe('test/app/ui/SelectField/SelectField.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<SelectField {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
