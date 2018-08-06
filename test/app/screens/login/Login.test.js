/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Login from 'screens/login/Login';
import {
  Text,
  Screen,
  TextField,
  Button,
  Row,
  Col,
  Image,
  Form,
} from 'ui';

import {
  Text as nText,
  Screen as nScreen,
  TextField as nTextField,
  Button as nButton,
  Row as nRow,
  Col as nCol,
  Image as nImage,
  Form as nForm,
} from 'ui/native';

describe('test/app/screens/login/Login.test.js', () => {
  it('Render-WEB', () => {
    const props = {
      Text,
      Screen,
      TextField,
      Button,
      Row,
      Col,
      Image,
      Form,
      handleSubmit: jest.fn(),
    };

    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render-NATIVE', () => {
    const props = {
      Text: nText,
      Screen: nScreen,
      TextField: nTextField,
      Button: nButton,
      Row: nRow,
      Col: nCol,
      Image: nImage,
      Form: nForm,
      handleSubmit: jest.fn(),
    };

    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
