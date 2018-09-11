/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

const props = {
  cards: [{
    title: 'dummyTitle',
    description: 'dummyDescription',
    image: 'dummyImage',
    id: 1,
    isFavorite: true,
    isRead: true,
  }],
  isLoaderVisible: false,
  search: 'dummySearch',
  addCards: jest.fn(),
  fetchPublications: jest.fn(),
};

describe('test/app/ui/CardList/Web.test.js', () => {
  let wrapper;

  beforeAll(() => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const { CardList } = require('ui/CardList/Web'); // eslint-disable-line global-require
    wrapper = shallow(<CardList {...props} />);
  });

  afterAll(() => {
    window.addEventListener.clearMock();
    window.removeEventListener.clearMock();
  });

  it('Render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
