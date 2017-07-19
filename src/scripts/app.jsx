import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Storage from 'common/Storage';
import ModalLoading from 'common/ModalLoading';
import UnAuthRouter from 'routes/UnAuthRouter';
import AuthUserRouter from 'routes/AuthUserRouter';
import NotFoundComponent from 'modules/not-found/NotFoundComponent';

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
        { !this.state.contentLoaded ? <ModalLoading /> : null }
        <Router>
            { isLoggedIn ?
              <Switch>
                <Route path="/" component={AuthUserRouter} />
                <Route path="*" component={NotFoundComponent} />
              </Switch>
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
  contentLoaded: PropTypes.bool
};
App.defaultProps = {
  contentLoaded: true
};

const mapStateToProps = (state) => {
	return {
		contentLoaded: state.contentLoaded
	};
};

export default connect(mapStateToProps)(App);
