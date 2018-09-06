/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { CardList } from 'ui/CardList/Native';

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

const nativeEvent = {
  layoutMeasurement: {
    height: 501,
  },
  contentOffset: {
    y: 100,
  },
  contentSize: {
    height: 1200,
  },
};

describe('test/app/ui/CardList/Native.test.js', () => {
  const wrapper = shallow(<CardList {...props} />);
  const {
    addCards,
    toggleFavorite,
    toggleRead,
    fetchCards,
    search,
  } = props;

  beforeEach(() => {
    wrapper.setProps(props);

    addCards.mockClear();
    toggleFavorite.mockClear();
    toggleRead.mockClear();
    fetchCards.mockClear();
  });

  it('Render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleScroll', () => {
    wrapper.instance().handleScroll({ nativeEvent });
    expect(addCards).toBeCalled();
  });

  describe('handleRefresh', () => {
    it('handleScroll: { isLoaderVisible: true }', () => {
      wrapper.setProps({
        ...props,
        isLoaderVisible: true,
      });

      wrapper.instance().handleRefresh();
      expect(fetchCards).not.toBeCalled();
    });

    it('handleScroll: { isLoaderVisible: true }', () => {
      wrapper.instance().handleRefresh();
      expect(fetchCards).toBeCalledWith({ search });
    });
  });
});
