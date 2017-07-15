import { connect } from 'react-redux';

import PublicationListComponent from './PublicationListComponent';
import { getAllPublications } from './PublicationListActions';

const mapStateToProps = (state) => {
  return {
   publications: state.publications.list,
   total: parseInt(state.publications.total, 10)
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationListComponent);
