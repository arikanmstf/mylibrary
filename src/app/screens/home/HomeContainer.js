/**
 * Web Screen Template By => create-module script
 * @version 1.0.0
 *
 */

import { connect } from 'react-redux';

import { connect as connectUi } from 'helpers/connect';
import {
  Screen,
  Header,
  Page,
  CardList,
} from 'ui';
import HomeScreen from './Home';
import { mapStateToProps, mapDispatchToProps } from './homeActions';

const mapUiToProps = () => ({
  Screen,
  Header,
  Page,
  CardList,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(HomeScreen));
