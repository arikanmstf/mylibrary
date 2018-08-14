import React from 'react';
import { shallow } from 'enzyme';
import connect from 'helpers/connect/connect';

const Component = (props) => (<div {...props} />);

describe('test/app/helpers/connect/connect.test.js', () => {
  const props = {
    source: {
      uri: 'dummyUri',
    },
  };

  it('Render', () => {
    const mapUiToProps = () => ({
      ui: 'dummyUI',
    });

    const Container = connect(mapUiToProps)(Component);
    const wrapper = shallow(<Container {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
