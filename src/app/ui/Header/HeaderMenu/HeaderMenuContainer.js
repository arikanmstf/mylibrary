// @flow

import { connect } from 'react-redux';
import { showDrawer } from 'ui/Screen/actions';

import HeaderMenu from './HeaderMenu.native';

export const mapDispatchToProps = {
  showDrawer,
};

export default connect(null, mapDispatchToProps)(HeaderMenu);
