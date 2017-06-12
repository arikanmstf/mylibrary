import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllWriters } from '../../actions/ResolvedGetAllWriters';
import Pagination from '../../components/Pagination';

class AdminWritersPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;
	}

	componentDidMount() {
		this.props.getAllWriters(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <tr key={book.book_id}>
          <td>{book.book_id}</td>
          <td>{book.title}</td>
          <td>
            <Link to={`/admin/books/edit/${book.book_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/books/remove/${book.book_id}`}>
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
          <h3>Admin Writers</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/writers"
          />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>Writer Name</td>
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

AdminWritersPage.propTypes = {
  search: PropTypes.object,
  getAllWriters: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminWritersPage.defaultProps = {
  search: {},
	books: [],
	total: 0
};

function mapStateToProps(state) {
  return {
   books: state.books.list,
   total: parseInt(state.books.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllWriters: (search) => dispatch(getAllWriters(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWritersPage);
