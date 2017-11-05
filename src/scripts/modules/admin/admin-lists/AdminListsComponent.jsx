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

class AdminListsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }
  componentDidMount() {
    this.props.getAllLists(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllLists({ title: newValue });
  }

  renderList() {
    return this.props.lists.map((list) => {
      return (
        <TableRow key={list.list_id}>
          <TableCell><span>{list.list_id}</span></TableCell>
          <TableCell><span>{list.title}</span></TableCell>
          <TableCell>
            <Link href={`${config.homeUrl}admin/lists/edit/${list.list_id}`} icon="edit" />
            <Link href={`${config.homeUrl}admin/lists/remove/${list.list_id}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Lists</h3>
        <Pagination
          pageNo={parseInt(this.state.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/lists/pages"
        />
        <Button href={`${config.homeUrl}admin/lists/add`} label="Add List" icon="add" raised primary />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false}>
          <TableHead>
            <TableRow>
              <TableCell><span>#</span></TableCell>
              <TableCell><span>List Name</span></TableCell>
              <TableCell><span>Options</span></TableCell>
            </TableRow>
          </TableHead>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

AdminListsComponent.propTypes = {
  getAllLists: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminListsComponent.defaultProps = {
  lists: [],
  total: 0
};

export default AdminListsComponent;
