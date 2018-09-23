/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import WriterDetail from 'screens/writerDetail/WriterDetail';

describe('test/app/screens/writerDetail/WriterDetail.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<WriterDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
