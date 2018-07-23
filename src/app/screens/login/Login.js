/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form/immutable';
import t from 'helpers/i18n/Translate';
import fields, { LOGIN_FORM_KEY } from 'constants/forms/login';
import Logo from 'assets/images/logo.png';
import logger from 'helpers/logger';

import type { LoginProps } from './LoginTypes';
import { submitLoginForm } from './loginActions';

// eslint-disable-next-line
class Login extends React.Component<LoginProps> {
  render() {
    logger.log('Login rendered.');
    const {
      Text, Screen, TextField, Button, Row, Col, Image, Form,
      handleSubmit,
    } = this.props;

    return (
      <Screen>
        <Form onSubmit={handleSubmit}>
          <Col>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={Logo}
                style={{ width: 100, height: 100 }}
                alt="mylibrary logo"
              />
            </Row>
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
                type="password"
              />
            </Row>
            <Row>
              <Button
                primary
                raised
                text={t.get('LOGIN_BUTTON')}
                type="submit"
                onPress={handleSubmit(submitLoginForm)}
              />
            </Row>
            <Row>
              <Text>{t.get('LOGIN_MESSAGE')}</Text>
            </Row>
          </Col>
        </Form>
      </Screen>
    );
  }
}

export default reduxForm({
  form: LOGIN_FORM_KEY,
  onSubmit: submitLoginForm,
})(Login);
