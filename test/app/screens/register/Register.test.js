/**
 * Screen Test Template By => create-module script
 * @version 1.0.0
 *
 */

import React from 'react';
import { shallow } from 'enzyme';
import Register from 'screens/register/Register';
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

describe('test/app/screens/register/Register.test.js', () => {
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

  it('Render', () => {
    const wrapper = shallow(<Register {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
