import { connect } from 'react-redux';

import { getAllPublications } from 'modules/publication-list/PublicationListActions';
import AdminPublicationsComponent from './AdminPublicationsComponent';

const mapStateToProps = (state) => {
  return {
   publications: state.publications.list,
   total: parseInt(state.publications.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsComponent);
