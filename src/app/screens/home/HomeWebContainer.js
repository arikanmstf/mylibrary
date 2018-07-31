/**
 * Web Screen Template By => create-module script
 * @version 1.0.0
 *
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { connect as connectUi } from 'helpers/connect';
import { Text, Screen } from 'ui';
import HomeScreen from './Home';
import { mapStateToProps, mapDispatchToProps } from './homeActions';

const mapUiToProps = () => ({
  Text, Screen,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(withRouter(HomeScreen)));
