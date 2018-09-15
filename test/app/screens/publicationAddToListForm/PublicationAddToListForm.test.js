/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import PublicationAddToListForm from 'screens/publicationAddToList/publicationAddToListForm/PublicationAddToListForm';

describe('test/app/screens/publicationAddToListForm/PublicationAddToListForm.test.js', () => {
  const props = {};

  it('Render', () => {
    const wrapper = shallow(<PublicationAddToListForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
