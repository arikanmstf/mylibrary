import { connect } from 'react-redux';

import LoginComponent from './LoginComponent';
import { getLogin } from './LoginActions';

const mapStateToProps = (state) => {
	return {
		username: state.username,
		password: state.password
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLogin: (data) => dispatch(getLogin(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
