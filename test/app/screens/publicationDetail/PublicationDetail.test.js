/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import PublicationDetail from 'screens/publicationDetail/PublicationDetail';

describe('test/app/screens/publicationDetail/PublicationDetail.test.js', () => {
  const props = {
    match:
      {
        params: {
          id: 1,
        },
      },
    fetchPublication: jest.fn(),
  };

  beforeAll(() => {
    props.fetchPublication.mockClear();
  });

  it('Render', () => {
    const wrapper = shallow(<PublicationDetail {...props} />);
    const { fetchPublication } = props;

    expect(wrapper).toMatchSnapshot();
    expect(fetchPublication).toBeCalledWith(1);
  });
});
