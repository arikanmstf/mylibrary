/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Screen } from 'ui/Screen/Native';

describe('test/app/ui/Screen/Native.test.js', () => {
  describe('Render', () => {
    it('props: {}', () => {
      const props = {};
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('props: { center: true }', () => {
      const props = { center: true };
      const wrapper = shallow(<Screen {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('hideDrawer', async () => {
    const hideDrawer = jest.fn();
    const props = {
      hideDrawer,
    };

    const wrapper = shallow(<Screen {...props} />);
    await wrapper.instance().hideDrawer();
    expect(hideDrawer).toBeCalled();
  });
});
