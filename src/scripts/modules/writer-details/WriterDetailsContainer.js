import { connect } from 'react-redux';

import { getWriterDetails } from 'modules/admin/admin-writers/AdminWritersActions';
import WriterDetailsComponent from './WriterDetailsComponent';

const mapStateToProps = (state) => {
	return {
		writer: state.writer
	};
};

const mapDispatchToProps = (dispatch) => {
  return { getWriterDetails: (writerId) => dispatch(getWriterDetails(writerId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriterDetailsComponent);
