/**
 * Native Component Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Loader from 'ui/ModalLoader/Native';
import { createFakeStore } from 'helpers/connect/fakeStore';

describe('test/app/ui/Loader/Native.test.js', () => {
  it('Render', () => {
    const props = {};
    const store = createFakeStore({ loader: { isVisible: false } });
    const wrapper = shallow(<Loader {...props} store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
