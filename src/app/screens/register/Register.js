/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form/immutable';
import t from 'helpers/i18n/Translate';
import fields, { REGISTER_FORM_KEY } from 'constants/forms/register';
import Logo from 'assets/images/logo.png';
import logger from 'helpers/logger';
import { LOGIN } from 'constants/routes/routeNames';

import { submitRegisterForm } from './registerActions';
import type { RegisterProps } from './RegisterTypes';

// eslint-disable-next-line
class Register extends React.Component<RegisterProps> {
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
      Link,
      handleSubmit,
    } = this.props;
    logger.log('render: Register');

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
                name={fields.NAME}
                label={t.get('REGISTER_NAME_PLACEHOLDER')}
                autoFocus
              />
            </Row>
            <Row>
              <TextField
                required
                name={fields.DISPLAY_NAME}
                label={t.get('REGISTER_DISPLAY_NAME_PLACEHOLDER')}
                autoFocus
              />
            </Row>
            <Row>
              <TextField
                required
                name={fields.EMAIL}
                label={t.get('REGISTER_EMAIL_PLACEHOLDER')}
                keyboardType="email-address"
                autoFocus
              />
            </Row>
            <Row>
              <TextField
                required
                name={fields.PASSWORD}
                label={t.get('REGISTER_PASSWORD_PLACEHOLDER')}
                type="password"
              />
            </Row>
            <Row>
              <TextField
                required
                name={fields.PASSWORD_REPEAT}
                label={t.get('REGISTER_PASSWORD_REPEAT_PLACEHOLDER')}
                type="password"
              />
            </Row>
            <Row>
              <Button
                primary
                raised
                text={t.get('REGISTER_BUTTON')}
                type="submit"
                onClick={handleSubmit(submitRegisterForm)}
              />
            </Row>
            <Row>
              <Text>{t.get('REGISTER_MESSAGE')}</Text>
            </Row>
            <Row>
              <Link to={LOGIN}><Text>{t.get('REGISTER_GOTO_LOGIN')}</Text></Link>
            </Row>
          </Col>
        </Form>
      </Screen>
    );
  }
}

export default reduxForm({
  form: REGISTER_FORM_KEY,
  onSubmit: submitRegisterForm,
})(Register);
