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
    fetchCard: jest.fn(),
  };

  beforeAll(() => {
    props.fetchCard.mockClear();
  });

  it('Render', () => {
    const wrapper = shallow(<PublicationDetail {...props} />);
    const { fetchCard } = props;

    expect(wrapper).toMatchSnapshot();
    expect(fetchCard).toBeCalledWith(1);
  });
});
