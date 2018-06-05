import { connect } from 'react-redux';

import PublicationListComponent from './PublicationListComponent';
import { getAllPublications } from './PublicationListActions';

const mapStateToProps = (state) => {
  return {
    publications: state.publications.list,
    total: +state.publications.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationListComponent);
