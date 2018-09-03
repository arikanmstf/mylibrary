/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Logout from 'screens/logout/Logout';

describe('test/app/screens/logout/Logout.test.js', () => {
  const props = {
    makeLogoutRequest: jest.fn(),
  };

  it('Render', () => {
    const wrapper = shallow(<Logout {...props} />);
    const { makeLogoutRequest } = props;

    expect(wrapper).toMatchSnapshot();
    expect(makeLogoutRequest).toBeCalled();
  });
});
