/**
 * Native Screen Template By => create-module script
 * @version 1.0.0
 *
 */

import { connect } from 'react-redux';
import LogoutScreen from './Logout';
import { mapStateToProps, mapDispatchToProps } from './logoutActions';

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);
