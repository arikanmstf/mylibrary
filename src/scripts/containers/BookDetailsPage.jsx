import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBookDetails } from '../actions/ResolvedGetBookDetails';
import { commaListItems } from '../common/Helpers';

class BookDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getBookDetails(this.state.bookId);
	}

	render() {
		const book = this.props.book;
		return book ? (
			<div className="item-details-page">
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
BookDetailsPage.propTypes = {
  getBookDetails: PropTypes.func.isRequired,
	book: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	// whatever is returned will show up
	// as props inside of BookList
	return {
		book: state.book
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return { getBookDetails: (bookId) => dispatch(getBookDetails(bookId)) };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
