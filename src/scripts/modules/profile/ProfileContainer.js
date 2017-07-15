import { connect } from 'react-redux';

import { getProfileDetails, updateProfileDetails } from './ProfileActions';
import ProfileComponent from './ProfileComponent';

const mapStateToProps = (state) => {
	return {
		profile: state.profile
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileDetails: () => dispatch(getProfileDetails()),
    updateProfileDetails: (form) => dispatch(updateProfileDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
