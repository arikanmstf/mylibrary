import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllPublications } from '../../actions/ResolvedGetAllPublications';
import Pagination from '../../components/Pagination';

class AdminPublicationsPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;
	}

	componentDidMount() {
		this.props.getAllPublications(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
  }

  renderList() {
    return this.props.publications.map((publication) => {
      return (
        <tr key={publication.publication_id}>
          <td>{publication.publication_id}</td>
          <td>{publication.title}</td>
          <td>{publication.writers}</td>
          <td>
            <Link to={`/admin/publications/edit/${publication.publication_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/publications/remove/${publication.publication_id}`}>
              <i className="glyphicon glyphicon-remove" />
            </Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="admin-page col-xs-12 col-sm-9 col-md-9">
          <h3>Admin Publications</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/publications"
          />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>Publication Name</td>
                <td>Writers</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
      </div>
    );
  }
}

AdminPublicationsPage.propTypes = {
  search: PropTypes.object,
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminPublicationsPage.defaultProps = {
  search: {},
	publications: [],
	total: 0
};

function mapStateToProps(state) {
  // whatever is returned will show up
  // as props inside of BookList
  return {
   publications: state.publications.list,
   total: parseInt(state.publications.total, 10)
  };
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsPage);
