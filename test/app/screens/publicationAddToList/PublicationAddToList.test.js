/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import PublicationAddToList from 'screens/publicationAddToList/PublicationAddToList';

describe('test/app/screens/publicationAddToList/PublicationAddToList.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<PublicationAddToList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
