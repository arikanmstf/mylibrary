/**
 * Web Screen Template By => create-module script
 * @version 1.0.0
 *
 */

import { connect } from 'react-redux';

import { connect as connectUi } from 'helpers/connect';
import {
  Text,
  Screen,
  TextField,
  Button,
  Div,
  Col,
  Image,
  Form,
} from 'ui';
import LoginScreen from './Login';
import { mapStateToProps, mapDispatchToProps } from './loginActions';

const mapUiToProps = () => ({
  Text,
  Screen,
  TextField,
  Button,
  Div,
  Col,
  Image,
  Form,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(LoginScreen));
