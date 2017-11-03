import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';

import config from 'config';
import Pagination from 'modules/common/pagination/Pagination';
import InputSearch from 'modules/common/input-search/InputSearch';

class AdminPublishersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllPublishers(this.state);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.search);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllPublishers({ title: newValue });
  }

  renderList() {
    return this.props.publishers.map((publisher) => {
      return (
        <TableRow key={publisher.publisher_id}>
          <TableCell>{publisher.publisher_id}</TableCell>
          <TableCell>{publisher.name}</TableCell>
          <TableCell className="item-actions">
            <Link href={`${config.homeUrl}admin/publishers/edit/${publisher.publisher_id}`} icon="settings" />
            <Link href={`${config.homeUrl}admin/publishers/remove/${publisher.publisher_id}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Publishers</h3>
        <Pagination
          pageNo={parseInt(this.props.match.params.pageNo, 10) || 1}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/publishers/pages"
        />
        <Button href={`${config.homeUrl}admin/publishers/add`} label="Add Publisher" raised accent />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false} className="admin-table">
          <TableHead>
            <TableCell>#</TableCell>
            <TableCell>Publisher Name</TableCell>
            <TableCell>Options</TableCell>
          </TableHead>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

AdminPublishersComponent.propTypes = {
  search: PropTypes.object,
  getAllPublishers: PropTypes.func.isRequired,
  publishers: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminPublishersComponent.defaultProps = {
  search: {},
  publishers: [],
  total: 0
};

export default AdminPublishersComponent;
