import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';

import config from 'config';
import Pagination from 'common/layout/pagination/Pagination';
import InputSearch from 'common/layout/input-search/InputSearch';

class AdminWritersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      pageNo: this.props.match.params.pageNo || 1
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllWriters(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllWriters({ title: newValue });
  }

  renderList() {
    return this.props.writers.map((writer) => {
      return (
        <TableRow key={writer.writer_id}>
          <TableCell>{writer.writer_id}</TableCell>
          <TableCell>{writer.full_name}</TableCell>
          <TableCell className="item-actions">
            <Link href={`${config.homeUrl}admin/writers/edit/${writer.writer_id}`} icon="settings" />
            <Link href={`${config.homeUrl}admin/writers/remove/${writer.writer_id}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Writers</h3>
        <Pagination
          pageNo={+this.props.match.params.pageNo || 1}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/writers/pages"
        />
        <Button href={`${config.homeUrl}admin/writers/add`} label="Add Writer" accent raised />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false} className="admin-table">
          <TableHead>
            <TableCell>#</TableCell>
            <TableCell>Writer Name</TableCell>
            <TableCell>Options</TableCell>
          </TableHead>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

AdminWritersComponent.propTypes = {
  getAllWriters: PropTypes.func.isRequired,
  writers: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminWritersComponent.defaultProps = {
  writers: [],
  total: 0
};

export default AdminWritersComponent;
