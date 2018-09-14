/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form/immutable';
import t from 'helpers/i18n/Translate';
import fields, { LOGIN_FORM_KEY } from 'constants/forms/login';
import Logo from 'assets/images/logo.png';
import logger from 'helpers/logger';
import { REGISTER } from 'constants/routes/routeNames';
import { submitLoginForm } from './loginActions';
import validate from './loginValidations';
import type { LoginProps } from './LoginTypes';

// eslint-disable-next-line
class Login extends PureComponent<LoginProps> {
  render() {
    const {
      Text,
      Screen,
      TextField,
      Button,
      Row,
      Col,
      Image,
      Form,
      handleSubmit,
    } = this.props;
    logger.log('render: Login');

    return (
      <Screen center>
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
                label={t.get('LOGIN_EMAIL_PLACEHOLDER')}
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
                onClick={handleSubmit(submitLoginForm)}
              />
            </Row>
            <Row>
              <Text>{t.get('LOGIN_MESSAGE')}</Text>
            </Row>
            <Row>
              <Button
                primary
                to={REGISTER}
                text={t.get('LOGIN_GOTO_REGISTER')}
                transparent
              />
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
  validate,
})(Login);
