/**
 * Native Screen Template By => create-module script
 * @version 1.0.0
 *
 */

import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import { connect as connectUi } from 'helpers/connect';
import {
  Text,
  KeyboardScreen,
  TextField,
  Button,
  Row,
  Col,
  Image,
  Form,
} from 'ui/native';

import RegisterScreen from './Register';
import { mapStateToProps, mapDispatchToProps } from './registerActions';

const mapUiToProps = () => ({
  Text,
  Screen: KeyboardScreen,
  TextField,
  Button,
  Row,
  Col,
  Image,
  Form,
  Link,
});
export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(RegisterScreen));
