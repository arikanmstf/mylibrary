import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/Pagination';
import InputSearch from 'common/input/InputSearch';

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
        <tr key={book.book_id}>
          <td>{book.book_id}</td>
          <td>{book.title}</td>
          <td>{book.writers}</td>
          <td>
            <Link to={`${config.homeUrl}admin/books/edit/${book.book_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/books/remove/${book.book_id}`}>
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
        <h3>Admin Books</h3>
        <Pagination
          pageNo={parseInt(this.props.match.params.pageNo, 10) || 1}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/books/pages"
        />
        <Link to={`${config.homeUrl}admin/books/add`} className="btn btn-success">Add Book</Link>
        <InputSearch makeSearch={this.setSearchTitle} />
        <table className="table table-responsive table-bordered table-hover admin-table">
          <thead>
            <tr>
              <td>#</td>
              <td>Book Name</td>
              <td>Writers</td>
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
