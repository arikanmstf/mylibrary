import { connect } from 'react-redux';

import { updatePublicationDetailsList } from 'modules/admin/AdminActions';
import PublicationDetailsComponent from './PublicationDetailsComponent';
import { getPublicationDetails } from './PublicationDetailsActions';

const mapStateToProps = (state) => {
  return {
    publication: state.publication,
    listSearch: state.listSearch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPublicationDetails: (search) => dispatch(getPublicationDetails(search)),
    updatePublicationDetailsList: (search) => dispatch(updatePublicationDetailsList(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetailsComponent);
