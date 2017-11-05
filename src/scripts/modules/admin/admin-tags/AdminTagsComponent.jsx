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

class AdminTagsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      pageNo: this.props.match.params.pageNo || 1
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllTags(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllTags({ title: newValue });
  }

  renderList() {
    return this.props.tags.map((tag) => {
      return (
        <TableRow key={tag.tag_id}>
          <TableCell><span>{tag.tag_id}</span></TableCell>
          <TableCell><span>{tag.title}</span></TableCell>
          <TableCell>
            <Link to={`${config.homeUrl}admin/tags/edit/${tag.tag_id}`} icon="edit" />
            <Link to={`${config.homeUrl}admin/tags/remove/${tag.tag_id}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Tags</h3>
        <Pagination
          pageNo={parseInt(this.state.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/tags/pages"
        />
        <Button href={`${config.homeUrl}admin/tags/add`} label="Add Tag" raised primary icon="add" />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false}>
          <TableHead>
            <TableRow>
              <TableCell><span>#</span></TableCell>
              <TableCell><span>Tag Name</span></TableCell>
              <TableCell><span>Options</span></TableCell>
            </TableRow>
          </TableHead>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

AdminTagsComponent.propTypes = {
  getAllTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminTagsComponent.defaultProps = {
  tags: [],
  total: 0
};

export default AdminTagsComponent;
