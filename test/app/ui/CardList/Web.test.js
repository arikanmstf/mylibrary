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
  toggleFavorite: jest.fn(),
  toggleRead: jest.fn(),
  fetchCards: jest.fn(),
};

describe('test/app/ui/CardList/Web.test.js', () => {
  let wrapper;
  const {
    toggleFavorite,
    toggleRead,
  } = props;

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

  it('toggleFavorite', () => {
    wrapper.instance().toggleFavorite(1, 2);
    expect(toggleFavorite).toBeCalledWith(1, 2);
  });

  it('toggleRead', () => {
    wrapper.instance().toggleRead(1, 2);
    expect(toggleRead).toBeCalledWith(1, 2);
  });
});
