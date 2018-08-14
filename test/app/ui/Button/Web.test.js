import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'ui';

describe('test/app/ui/Button/Web.test.js', () => {
  it('Render: props: { text }', () => {
    const props = {
      text: 'dummyText',
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { primary }', () => {
    const props = {
      text: 'dummyText',
      primary: true,
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { raised }', () => {
    const props = {
      text: 'dummyText',
      raised: true,
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render: props: { onPress }', () => {
    const props = {
      text: 'dummyText',
      onPress: jest.fn(() => 'returnValue'),
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
