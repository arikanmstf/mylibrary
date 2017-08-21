import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/pagination/Pagination';
import InputSearch from 'modules/common/input-search/InputSearch';

class AdminUsersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      pageNo: this.props.match.params.pageNo || 1
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllUsers(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
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
            <Link to={`${config.homeUrl}admin/users/edit/${user.user_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/users/remove/${user.user_id}`}>
              <i className="glyphicon glyphicon-remove" />
            </Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Users</h3>
        <Pagination
          pageNo={parseInt(this.state.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/users/pages"
        />
        <Link to={`${config.homeUrl}admin/users/add`} className="btn btn-success">Add User</Link>
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

AdminUsersComponent.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminUsersComponent.defaultProps = {
  users: [],
  total: 0
};

export default AdminUsersComponent;
