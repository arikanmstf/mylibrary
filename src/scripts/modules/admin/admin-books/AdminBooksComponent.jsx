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

class AdminBooksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      pageNo: this.props.match.params.pageNo || 1
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllBooks(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllBooks({ title: newValue });
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <TableRow key={book.book_id}>
          <TableCell>{book.book_id}</TableCell>
          <TableCell>{book.title}</TableCell>
          <TableCell>{book.writers}</TableCell>
          <TableCell className="item-actions">
            <Link href={`${config.homeUrl}admin/books/edit/${book.book_id}`} icon="settings" />
            <Link href={`${config.homeUrl}admin/books/remove/${book.book_id}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Admin Books</h3>
        <Pagination
          pageNo={parseInt(this.props.match.params.pageNo, 10) || 1}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/books/pages"
        />
        <Button href={`${config.homeUrl}admin/books/add`} label="Add Book" raised accent />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false} className="admin-table">
          <TableHead>
            <TableCell>#</TableCell>
            <TableCell>Book Name</TableCell>
            <TableCell>Writers</TableCell>
            <TableCell>Options</TableCell>
          </TableHead>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

AdminBooksComponent.propTypes = {
  getAllBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminBooksComponent.defaultProps = {
  books: [],
  total: 0
};

export default AdminBooksComponent;
