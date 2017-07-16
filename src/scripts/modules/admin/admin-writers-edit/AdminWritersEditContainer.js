import { connect } from 'react-redux';

import { getWriterDetails } from 'modules/admin/admin-writers/AdminWritersActions';
import { updateWriterDetails } from 'modules/admin/AdminActions';
import AdminWritersEditComponent from './AdminWritersEditComponent';

const mapStateToProps = (state) => {
	return {
		writer: state.writer
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWriterDetails: (search) => dispatch(getWriterDetails(search)),
    updateWriterDetails: (form) => dispatch(updateWriterDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWritersEditComponent);
