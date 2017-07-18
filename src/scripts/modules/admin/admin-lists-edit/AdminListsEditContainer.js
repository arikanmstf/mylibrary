import { connect } from 'react-redux';

import { getListDetails } from 'modules/list-details/ListDetailsActions';
import { updateListDetails } from 'modules/admin/AdminActions';
import AdminListsEditComponent from './AdminListsEditComponent';

const mapStateToProps = (state) => {
	return {
		list: state.list
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListDetails: (search) => dispatch(getListDetails(search)),
    updateListDetails: (form) => dispatch(updateListDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminListsEditComponent);
