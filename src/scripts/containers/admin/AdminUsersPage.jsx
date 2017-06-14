import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllUsers } from '../../actions/ResolvedGetAllUsers';
import Pagination from '../../components/Pagination';
import InputSearch from '../../components/input/InputSearch';

class AdminUsersPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;

    this.setSearchTitle = this.setSearchTitle.bind(this);
	}

	componentDidMount() {
		this.props.getAllUsers(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllUsers({ title: newValue });
  }

  renderList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.user_id}>
          <td>{user.user_id}</td>
          <td>{user.display_name}</td>
          <td>
            <Link to={`/admin/users/edit/${user.user_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/users/remove/${user.user_id}`}>
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
          <h3>Admin Users</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/users"
          />
          <Link to={`/admin/users/add`} className="btn btn-success">Add User</Link>
          <InputSearch makeSearch={this.setSearchTitle} />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>User Name</td>
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

AdminUsersPage.propTypes = {
  search: PropTypes.object,
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminUsersPage.defaultProps = {
  search: {},
	users: [],
	total: 0
};

function mapStateToProps(state) {
  return {
   users: state.users.list,
   total: parseInt(state.users.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllUsers: (search) => dispatch(getAllUsers(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersPage);
