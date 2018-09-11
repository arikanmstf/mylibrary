/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import {
  Screen,
  Header,
  Page,
  CardList,
} from 'ui';
import Home from 'screens/home/Home';

describe('test/app/screens/home/Home.test.js', () => {
  const props = {
    Screen,
    Header,
    Page,
    CardList,
    cards: [{ id: 1 }, { id: 2 }],
    fetchPublications: jest.fn(),
  };

  it('Render', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
