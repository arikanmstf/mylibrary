import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'ui';

describe('test/app/ui/Text/Web.test.js', () => {
  it('Render: props: { children: DummyText }', () => {
    const wrapper = shallow(<Text>DummyText</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
