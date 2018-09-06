/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { CardDetail } from 'ui/CardDetail/Native';

const props = {
  card: {
    title: 'dummyTitle',
    description: 'dummyDescription',
    image: 'dummyImage',
    id: 1,
    isFavorite: true,
    isRead: true,
  },
  toggleFavorite: jest.fn(),
  toggleRead: jest.fn(),
};

describe('test/app/ui/CardDetail/Native.test.js', () => {
  const wrapper = shallow(<CardDetail {...props} />);
  const {
    toggleFavorite,
    toggleRead,
  } = props;

  beforeEach(() => {
    wrapper.setProps(props);
    toggleFavorite.mockClear();
    toggleRead.mockClear();
  });

  it('Render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('toggleFavorite', () => {
    wrapper.instance().toggleFavorite(1);
    expect(toggleFavorite).toBeCalledWith(1);
  });

  it('toggleRead', () => {
    wrapper.instance().toggleRead(1);
    expect(toggleRead).toBeCalledWith(1);
  });
});
