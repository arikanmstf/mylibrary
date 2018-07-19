/**
 * Web Screen Template By => create-module script
 * @version 1.0.0
 *
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { connect as connectUi } from 'helpers/connect';
import { Text, View } from 'ui';
import LoginScreen from './Login';
import { mapStateToProps, mapDispatchToProps } from './loginActions';

const mapUiToProps = () => ({
  Text, View,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(withRouter(LoginScreen)));
