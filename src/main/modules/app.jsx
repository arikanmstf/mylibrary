import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PropTypes from 'prop-types';
import config from 'config';

import Storage from 'common/Storage';
import ModalLoading from 'common/layout/modal-loading/ModalLoading';
import UnAuthRouter from 'routes/UnAuthRouter';
import AuthUserRouter from 'routes/AuthUserRouter';

import ModalContainer from 'common/layout/modal/ModalContainer';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import SideNavigation from 'common/layout/side-navigation/SideNavigationContainer';
import NavbarHeader from 'common/layout/navbar-header/NavbarHeader';
import { openDrawer } from 'common/layout/side-navigation/SideNavigationActions';

const isLoggedIn = Storage.get('login_key');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
    return (
      <div className="main-container">
        <ModalContainer message="" />
        { !this.props.contentLoaded ? <ModalLoading /> : null }
        <Router>
          { isLoggedIn ?
            <Layout>
              <SideNavigation />
              <Panel>
                <NavbarHeader onLeftIconClick={this.props.openDrawer} />
                <Switch>
                  <Route path={config.homeUrl} component={AuthUserRouter} />
                </Switch>
              </Panel>
            </Layout>
            :
            <Switch>
              <UnAuthRouter />
            </Switch>
          }
        </Router>
        <div className="clearfix" />
      </div>
    );
  }
}
App.propTypes = {
  contentLoaded: PropTypes.bool,
  openDrawer: PropTypes.func.isRequired
};
App.defaultProps = {
  contentLoaded: true
};

const mapStateToProps = (state) => {
  return {
    contentLoaded: state.contentLoaded,
    drawerActive: state.drawerActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return { openDrawer: () => dispatch(openDrawer()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
