/**
 * Web Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'ui/Header/Web';

describe('test/app/ui/Header/Web.test.js', () => {
  it('Render', () => {
    const props = {};
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('mapSideNavigationItems', () => {
    expect(Header.mapSideNavigationItems()).toMatchSnapshot();
  });

  describe('toggleDrawer', () => {
    it('call showDrawer', async () => {
      const showDrawer = jest.fn();
      const props = {
        isDrawerOpen: false,
        showDrawer,
      };

      const wrapper = shallow(<Header {...props} />);
      await wrapper.instance().toggleDrawer();
      expect(showDrawer).toBeCalled();
    });

    it('call hideDrawer', async () => {
      const hideDrawer = jest.fn();
      const props = {
        isDrawerOpen: true,
        hideDrawer,
      };

      const wrapper = shallow(<Header {...props} />);
      await wrapper.instance().toggleDrawer();
      expect(hideDrawer).toBeCalled();
    });
  });
});
