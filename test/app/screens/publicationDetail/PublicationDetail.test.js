/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import PublicationDetail from 'screens/publicationDetail/PublicationDetail';

describe('test/app/screens/publicationDetail/PublicationDetail.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<PublicationDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
