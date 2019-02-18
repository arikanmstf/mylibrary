/**
 * Screen Test Template By => create-module script
 * @version 1.2.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import AddListForm from 'screens/addListForm/AddListForm';

describe('test/app/screens/addListForm/AddListForm.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<AddListForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
