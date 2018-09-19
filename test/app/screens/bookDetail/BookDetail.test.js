/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import BookDetail from 'screens/bookDetail/BookDetail';

describe('test/app/screens/bookDetail/BookDetail.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<BookDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
