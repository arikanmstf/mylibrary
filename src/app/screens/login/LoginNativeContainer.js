/**
 * Native Screen Template By => create-module script
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
  Row,
  Col,
  Image,
} from 'ui/native';
import LoginScreen from './Login';
import { mapStateToProps, mapDispatchToProps } from './loginActions';

const mapUiToProps = () => ({
  Text, Screen, TextField, Button, Row, Col, Image,
});
export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(LoginScreen));
