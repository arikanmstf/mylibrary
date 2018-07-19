/**
 * Screen Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import t from 'helpers/i18n/Translate';
import type { LoginProps } from './LoginTypes';

// eslint-disable-next-line
class Login extends React.Component<LoginProps> {
  render() {
    const {
      Text, View,
    } = this.props;

    return (
      <View>
        <Text>{t.get('welcome')}</Text>
      </View>
    );
  }
}

export default Login;
