/**
 * Web Screen Template By => create-module script
 * @version 1.2.0
 *
 */

import { connect } from 'react-redux';
import { connect as connectUi } from 'helpers/connect';
import {
  Screen,
  Header,
  Page,
  CardDetail,
} from 'ui';
import ProfileScreen from './Profile';
import { mapStateToProps, mapDispatchToProps } from './profileActions';

const mapUiToProps = () => ({
  Screen,
  Header,
  Page,
  CardDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(ProfileScreen));
