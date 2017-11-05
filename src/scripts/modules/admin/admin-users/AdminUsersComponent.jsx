import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from 'config';

import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';

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
        <TableRow key={user.user_id}>
          <TableCell><span>{user.user_id}</span></TableCell>
          <TableCell><span>{user.display_name}</span></TableCell>
          <TableCell>
            <Link href={`${config.homeUrl}admin/users/edit/${user.user_id}`} icon="edit" />
            <Link href={`${config.homeUrl}admin/users/remove/${user.user_id}`} icon="delete" />
          </TableCell>
        </TableRow>
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
        <Button href={`${config.homeUrl}admin/users/add`} label="Add User" icon="add" raised primary />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false}>
          <TableHead>
            <TableRow>
              <TableCell><span>#</span></TableCell>
              <TableCell><span>User Name</span></TableCell>
              <TableCell><span>Options</span></TableCell>
            </TableRow>
          </TableHead>
          {this.renderList()}
        </Table>
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
