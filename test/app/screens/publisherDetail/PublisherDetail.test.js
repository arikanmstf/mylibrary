/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import PublisherDetail from 'screens/publisherDetail/PublisherDetail';

describe('test/app/screens/publisherDetail/PublisherDetail.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<PublisherDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
