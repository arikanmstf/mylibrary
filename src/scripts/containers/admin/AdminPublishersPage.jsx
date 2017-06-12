import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllPublishers } from '../../actions/ResolvedGetAllPublishers';
import Pagination from '../../components/Pagination';

class AdminPublishersPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;
	}

	componentDidMount() {
		this.props.getAllPublishers(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
  }

  renderList() {
    return this.props.publishers.map((publisher) => {
      return (
        <tr key={publisher.publisher_id}>
          <td>{publisher.publisher_id}</td>
          <td>{publisher.name}</td>
          <td>
            <Link to={`/admin/publishers/edit/${publisher.publisher_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/publishers/remove/${publisher.publisher_id}`}>
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
          <h3>Admin Publishers</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/publishers"
          />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>Publisher Name</td>
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

AdminPublishersPage.propTypes = {
  search: PropTypes.object,
  getAllPublishers: PropTypes.func.isRequired,
  publishers: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminPublishersPage.defaultProps = {
  search: {},
	publishers: [],
	total: 0
};

function mapStateToProps(state) {
  return {
   publishers: state.publishers.list,
   total: parseInt(state.publishers.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllPublishers: (search) => dispatch(getAllPublishers(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublishersPage);
