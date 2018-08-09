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
  Header,
  Page,
} from 'ui/native';
import HomeScreen from './Home';
import { mapStateToProps, mapDispatchToProps } from './homeActions';

const mapUiToProps = () => ({
  Text, Screen, Header, Page,
});
export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(HomeScreen));
