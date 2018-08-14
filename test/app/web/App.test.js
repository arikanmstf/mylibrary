import React from 'react';
import { shallow } from 'enzyme';

describe('test/app/web/App.test.js', () => {
  let App;

  beforeAll(() => {
    jest.mock('assets/fonts/libre-baskerville.regular.ttf', () => 'baskerVilleFontMock');
    App = require('web/App').default; // eslint-disable-line
  });

  it('Render: props: null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
