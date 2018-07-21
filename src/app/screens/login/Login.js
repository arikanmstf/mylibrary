/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form';
import t from 'helpers/i18n/Translate';
import fields, { LOGIN_FORM_KEY } from 'constants/forms/login';
import type { LoginProps } from './LoginTypes';

// eslint-disable-next-line
class Login extends React.Component<LoginProps> {
  render() {
    const {
      Text, Screen, TextField, Button, Row, Col,
    } = this.props;

    return (
      <Screen>
        <Col>
          <Row>
            <TextField
              required
              name={fields.EMAIL}
              label={t.get('LOGIN_USERNAME_PLACEHOLDER')}
              keyboardType="email-address"
            />
          </Row>
          <Row>
            <TextField
              required
              name={fields.PASSWORD}
              label={t.get('LOGIN_PASSWORD_PLACEHOLDER')}
            />
          </Row>
          <Row>
            <Button
              primary
              raised
              text={t.get('LOGIN_BUTTON')}
            />
          </Row>
          <Row>
            <Text>{t.get('LOGIN_MESSAGE')}</Text>
          </Row>
        </Col>
      </Screen>
    );
  }
}

export default reduxForm({
  form: LOGIN_FORM_KEY,
})(Login);
