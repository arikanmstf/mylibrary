import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from 'config';

import InputSearch from 'common/input/InputSearch';
import InputUpload from 'common/input/InputUpload';
import ListsOfPublicationEdit from 'modules/common/ListsOfPublicationEdit';

class AdminPublicationsAddComponent extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      publisher_id: 0,
      book_id: 0,
      description: '',
			download_url: '',
      isbn: '',
			lists: [],
      cover_no: 0,
      page_number: 0,
			image_url: '',
			file_url: ''
    };

    this.onDescChange = this.onDescChange.bind(this);
    this.onIsbnChange = this.onIsbnChange.bind(this);
		this.onDownloadUrlChange = this.onDownloadUrlChange.bind(this);
    this.onCoverChange = this.onCoverChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.searchPublishers = this.searchPublishers.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this.onListsChange = this.onListsChange.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

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
	onDownloadUrlChange(event) {
    this.setState({
      download_url: event.target.value
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
	onListsChange(lists) {
		this.setState({ lists });
	}
	onImageUpload(res) {
		this.setState({ image_url: res.response.filename });
	}
	onFileUpload(res) {
		this.setState({ file_url: res.response.filename });
	}
  addNewBook(book) {
    this.setState({ ...book });
    this.props.resetGetBookBySearch();
  }
  addNewPublisher(publisher) {
    this.setState({ publisher_name: publisher.name, publisher_id: publisher.publisher_id });
    this.props.resetGetPublisherBySearch();
  }
  searchBooks(newValue) {
    this.props.getBookBySearch(newValue);
  }
  searchPublishers(newValue) {
    this.props.getPublisherBySearch(newValue);
  }

  saveForm() {
    const form = {
      ...this.state
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
							src={`${config.homeUrl}static/img/cover/undefined.jpg`}
						/>
					</div>
					<div className="col-md-9 col-sm-9 item-info">
            <div className="item-title">
              {this.state.title}
            </div>
						<div className="item-small-title">
              <InputSearch makeSearch={this.searchBooks} title="Search books to assign to the publication" />
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
							<InputSearch makeSearch={this.searchPublishers} title="Search Pulishers" />
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
										<td>Download Url</td>
										<td>
                      <input value={this.state.download_url} onChange={this.onDownloadUrlChange} />
                    </td>
									</tr>
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
						<div className="item-file-container">
							<InputUpload
								accept="image/jpeg, image/png"
								title="Upload cover image"
								onUpload={this.onImageUpload}
							/>
							<InputUpload
								accept="application/epub+zip, application/pdf, application/x-ms-reader, application/x-obak,application/msword, application/doc, appl/text, application/vnd.msword, application/vnd.ms-word, application/winword, application/word, application/x-msw6, application/x-msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/rtf, application/x-rtf, text/rtf, text/richtext, application/msword, application/doc, application/x-soffice, text/plain, application/txt, browser/internal, text/anytext, widetext/plain, widetext/paragraph"
								title="Upload book file"
								onUpload={this.onFileUpload}
							/>
						</div>
						<div className="item-lists-container">
							<div className="item-lists col-sm-12 col-xs-12">
								<h5>Lists</h5>
								<ListsOfPublicationEdit onListsChange={this.onListsChange} />
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
AdminPublicationsAddComponent.propTypes = {
  getBookBySearch: PropTypes.func.isRequired,
  resetGetBookBySearch: PropTypes.func.isRequired,
  getPublisherBySearch: PropTypes.func.isRequired,
  resetGetPublisherBySearch: PropTypes.func.isRequired,
  addPublicationDetails: PropTypes.func.isRequired,
	bookSearch: PropTypes.arrayOf(Object).isRequired,
	publisherSearch: PropTypes.arrayOf(Object).isRequired
};

export default AdminPublicationsAddComponent;
