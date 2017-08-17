import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { commaListItems } from 'common/Helpers';

class BookDetailsComponent extends Component {

  componentDidMount() {
    this.props.getBookDetails(this.props.match.params.bookId);
  }

  render() {
    const book = this.props.book;
    return book ? (
      <div className="item-details-page book-details">
        <div className="item-details-container">
          <div className="col-md-12 col-sm-12 item-info">
            <div className="item-title">
              <span>{ book.title }</span>
            </div>
            <p className="item-description">
              { book.description }
            </p>
            <span className="item-light-title">Publications of the Book</span>
            <div className="item-small-title">
              { commaListItems(book.publishers, book.publication_ids, 'publications') }
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-md-12" />
        </div>
      </div>
    ) : null;
  }
}
BookDetailsComponent.propTypes = {
  getBookDetails: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default BookDetailsComponent;
