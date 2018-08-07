/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form/immutable';
import { View } from 'react-native';
import { Toolbar, Icon } from 'react-native-material-ui';

import { Image, TextField } from 'ui/native';
import Logo from 'assets/images/logo.png';
import { HOME } from 'constants/routes/routeNames';
import t from 'helpers/i18n/Translate';
import fields, { SEARCH_FORM_KEY } from 'constants/forms/search';
import styles from './style';

class Header extends React.PureComponent<> {
  static renderMenu() {
    return (
      <View>
        <Icon name="menu" size="30" />
      </View>
    );
  }

  static renderImage() {
    return (
      <Image source={Logo} alt="mylibrary logo" to={HOME} style={styles.image} />
    );
  }

  static renderTextField() {
    return (
      <TextField
        name={fields.QUERY}
        label={t.get('HEADER_SEARCH')}
        type="search"
        className={styles.search}
      />
    );
  }

  render() {
    return (
      <Toolbar
        style={{
          container: styles.container,
        }}
        leftElement={Header.renderImage()}
        centerElement={Header.renderTextField()}
        rightElement={Header.renderMenu()}
      />
    );
  }
}

export default reduxForm({
  form: SEARCH_FORM_KEY,
})(Header);
