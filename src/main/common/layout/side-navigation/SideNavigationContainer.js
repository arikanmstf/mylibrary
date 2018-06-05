import { connect } from 'react-redux';

import { closeDrawer } from './SideNavigationActions';
import SideNavigation from './SideNavigation';

const mapStateToProps = (state) => {
  return {
    drawerActive: state.drawerActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return { closeDrawer: () => dispatch(closeDrawer()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNavigation);
