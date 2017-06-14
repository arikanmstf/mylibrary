import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBookBySearch, resetGetBookBySearch } from '../../actions/ResolvedGetBookBySearch';
import { getPublisherBySearch, resetGetPublisherBySearch } from '../../actions/ResolvedGetPublisherBySearch';
import { addPublicationDetails } from '../../actions/ResolvedSetAdminForm';
import ListsOfPublicationEdit from '../../components/ListsOfPublicationEdit';

class AdminPublicationsAddPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      publisher_id: 0,
      book_id: 0,
      description: '',
      isbn: '',
      cover_no: 0,
      page_number: 0,
      new_title: '',
      new_publisher: '',
      lists: [],
      ...props
    };

    this.onNewBookChange = this.onNewBookChange.bind(this);
    this.onNewPublisherChange = this.onNewPublisherChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onIsbnChange = this.onIsbnChange.bind(this);
    this.onCoverChange = this.onCoverChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.searchPublishers = this.searchPublishers.bind(this);
    this.searchBooks = this.searchBooks.bind(this);

    this.saveForm = this.saveForm.bind(this);
  }

  onDescChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  onIsbnChange(event) {
    this.setState({
      isbn: event.target.value
    });
  }
  onCoverChange(event) {
    this.setState({
      cover_no: event.target.value
    });
  }
  onPageChange(event) {
    this.setState({
      page_number: event.target.value
    });
  }
  onNewPublisherChange(event) {
    this.setState({
      new_publisher: event.target.value
    });
  }
  onNewBookChange(event) {
    this.setState({
      new_title: event.target.value
    });
  }
  addNewBook(book) {
    this.setState({ ...book, new_title: '' });
    this.props.resetGetBookBySearch();
  }
  addNewPublisher(publisher) {
    this.setState({ publisher_name: publisher.name, publisher_id: publisher.publisher_id, new_publisher: '' });
    this.props.resetGetPublisherBySearch();
  }
  searchBooks() {
    this.props.getBookBySearch(this.state.new_title);
  }
  searchPublishers() {
    this.props.getPublisherBySearch(this.state.new_publisher);
  }

  saveForm() {
    const form = {
      book_id: this.state.book_id,
      lists: this.state.lists,
      publisher_id: this.state.publisher_id,
      isbn: this.state.isbn,
      cover_no: this.state.cover_no,
      page_number: this.state.page_number
    };
    this.props.addPublicationDetails(form);
  }
  renderSearchBook() {
    const bookSearch = this.props.bookSearch;
    return bookSearch && (this.props.bookSearch.map((book) => {
      return (
        <li key={book.book_id} onClick={() => this.addNewBook(book)}>{book.title}</li>
      );
    }));
  }
  renderSearchPublisher() {
    const publisherSearch = this.props.publisherSearch;
    return publisherSearch && (this.props.publisherSearch.map((publisher) => {
      return (
        <li key={publisher.publisher_id} onClick={() => this.addNewPublisher(publisher)}>{publisher.name}</li>
      );
    }));
  }

	render() {
		return true && (
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-3 col-sm-3 item-info image-container">
						<img
							className="item-image"
							src={`/assets/img/cover/undefined.jpg`}
						/>
					</div>
					<div className="col-md-9 col-sm-9 item-info">
            <div className="item-title">
              {this.state.title}
            </div>
						<div className="item-small-title">
              <button onClick={this.searchBooks} className="btn btn-search col-sm-3 col-md-3 col-xs-3 right">
                <i className="glyphicon glyphicon-search" />
              </button>
              <input
                className="input-title col-sm-9 col-md-9 col-xs-9 right"
                placeholder="Search books to assign to the publication"
                value={this.state.new_title}
                onChange={this.onNewBookChange}
              />
              <div className="clearfix" />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchBook()}
                </ul>
              </div>
						</div>
						<div className="item-small-title">
              <span>
                {this.state.publisher_name}
              </span>
              <button className="btn btn-search right" onClick={this.searchPublishers}>
                <i className="glyphicon glyphicon-search" />
              </button>
              <input
                className="input-title right"
                placeholder="Search publishers"
                value={this.state.new_publisher}
                onChange={this.onNewPublisherChange}
              />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchPublisher()}
                </ul>
              </div>
						</div>
						<div className="item-table">
							<table className="table table-responsive">
								<tbody>
									<tr>
										<td>ISBN</td>
										<td>
                      <input value={this.state.isbn} onChange={this.onIsbnChange} />
                    </td>
									</tr>
									<tr>
										<td>Cover No</td>
                    <td>
                      <input type="number" value={this.state.cover_no} onChange={this.onCoverChange} />
                    </td>
									</tr>
									<tr>
										<td>Page Number</td>
                    <td>
                      <input type="number" value={this.state.page_number} onChange={this.onPageChange} />
                    </td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="item-lists-container">
							<div className="item-lists col-sm-12 col-xs-12">
								<h5>Lists</h5>
								<ListsOfPublicationEdit lists={this.state.lists} />
							</div>
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" >
            <button className="btn btn-primary" onClick={this.saveForm}>Save</button>
					</div>
				</div>
			</div>
		);
	}
}
AdminPublicationsAddPage.propTypes = {
  getBookBySearch: PropTypes.func.isRequired,
  resetGetBookBySearch: PropTypes.func.isRequired,
  getPublisherBySearch: PropTypes.func.isRequired,
  resetGetPublisherBySearch: PropTypes.func.isRequired,
  addPublicationDetails: PropTypes.func.isRequired,
	bookSearch: PropTypes.arrayOf(Object).isRequired,
	publisherSearch: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state) {
	return {
		bookSearch: state.bookSearch,
		publisherSearch: state.publisherSearch
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookBySearch: (search) => dispatch(getBookBySearch(search)),
    resetGetBookBySearch: () => dispatch(resetGetBookBySearch()),
    getPublisherBySearch: (search) => dispatch(getPublisherBySearch(search)),
    resetGetPublisherBySearch: () => dispatch(resetGetPublisherBySearch()),
    addPublicationDetails: (form) => dispatch(addPublicationDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsAddPage);
