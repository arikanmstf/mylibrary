/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Header, renderList, SideBar } from 'ui/Header/Native';
import routes from 'ui/Header/sideNavigationItems';

describe('test/app/ui/Header/Native.test.js', () => {
  const props = {};
  const wrapper = shallow(<Header {...props} />);

  describe('Render', () => {
    it('props: {}', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('props: { back: true }', () => {
      wrapper.setProps({ back: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('handleMenuButtonPress', () => {
    const showDrawer = jest.fn();
    const newProps = {
      showDrawer,
    };

    wrapper.setProps(newProps);
    wrapper.instance().handleMenuButtonPress();
    expect(showDrawer).toBeCalled();
  });

  it('renderList', () => {
    const route = routes[0];
    expect(renderList(route)).toMatchSnapshot();
  });

  it('SideBar', () => {
    const wrapperSidebar = shallow(<SideBar />);
    expect(wrapperSidebar).toMatchSnapshot();
  });

  it('renderBackButton', () => {
    expect(wrapper.instance().renderBackButton()).toMatchSnapshot();
  });

  it('renderCenter', () => {
    expect(wrapper.instance().renderCenter()).toMatchSnapshot();
  });
});
