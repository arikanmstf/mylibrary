import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link';
import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';

import config from 'config';
import Pagination from 'modules/common/pagination/Pagination';
import InputSearch from 'modules/common/input-search/InputSearch';

class AdminPublicationsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllPublications(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllPublications({ title: newValue });
  }

  renderList() {
    return this.props.publications.map((publication) => {
      return (
        <TableRow key={publication.publication_id}>
          <TableCell>{publication.publication_id}</TableCell>
          <TableCell>{publication.title}</TableCell>
          <TableCell>{publication.writers}</TableCell>
          <TableCell className="item-actions">
            <Link href={`${config.homeUrl}admin/publications/edit/${publication.publication_id}`} icon="settings" />
            <Link href={`${config.homeUrl}admin/publications/remove/${publication.publication_id}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Publications</h3>
        <Pagination
          pageNo={parseInt(this.state.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/publications/pages"
        />
        <Button href={`${config.homeUrl}admin/publications/add`} label="Add Publication" raised accent />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false} className="admin-table">
          <TableHead>
            <TableCell>#</TableCell>
            <TableCell>Publication Name</TableCell>
            <TableCell>Writers</TableCell>
            <TableCell>Options</TableCell>
          </TableHead>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

AdminPublicationsComponent.propTypes = {
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminPublicationsComponent.defaultProps = {
  publications: [],
  total: 0
};

export default AdminPublicationsComponent;
