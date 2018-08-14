import React from 'react';
import { shallow } from 'enzyme';

describe('test/app/web/Routes.test.js', () => {
  let Routes;

  beforeAll(() => {
    jest.mock('assets/images/loading.gif', () => 'mockLoading');
    Routes = require('web/Routes').default; // eslint-disable-line
  });

  it('Render: props: null', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
