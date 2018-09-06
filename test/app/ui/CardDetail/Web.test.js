/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';

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

describe('test/app/ui/CardDetail/Web.test.js', () => {
  let wrapper;
  const {
    toggleFavorite,
    toggleRead,
  } = props;

  beforeAll(() => {
    const { CardDetail } = require('ui/CardDetail/Web'); // eslint-disable-line global-require
    wrapper = shallow(<CardDetail {...props} />);
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
