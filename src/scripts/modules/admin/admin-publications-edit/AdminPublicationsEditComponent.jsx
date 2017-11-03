import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from 'config';

import InputSearch from 'modules/common/input-search/InputSearch';
import InputUpload from 'modules/common/input-upload/InputUpload';
import ListsOfPublicationEdit from 'modules/common/lists-of-publication/ListsOfPublicationEdit';

class AdminPublicationsEditComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      publisher_id: 1,
      book_id: 0,
      download_url: '',
      isbn: '',
      lists: [],
      cover_no: 0,
      page_number: 0,
      file_url: '',
      image_url: ''
    };
  }

  componentDidMount() {
    this.props.getPublicationDetails(this.props.match.params.publicationId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      book_id: nextProps.publication.book_id,
      isbn: nextProps.publication.isbn || '',
      download_url: nextProps.publication.download_url || '',
      cover_no: nextProps.publication.cover_no,
      lists: nextProps.publication.lists,
      page_number: nextProps.publication.page_number,
      publisher_id: nextProps.publication.publisher_id || 1
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
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
      ...this.state,
      publication_id: this.props.publication.publication_id
    };
    this.props.updatePublicationDetails(form);
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
    const publication = this.props.publication;
    return publication && (
      <div className="item-details-page   ">
        <div className="item-details-container">
          <div className="  item-info image-container">
            <img
              alt="cover img"
              className="item-image"
              src={`${config.homeUrl}static/img/cover/${publication.publication_id}.jpg`}
            />
          </div>
          <div className="  item-info">
            <div className="item-title">
              {this.state.title || publication.title}
            </div>
            <div className="item-small-title">
              <InputSearch title="Search Books" makeSearch={(newValue) => this.searchBooks(newValue)} />
              <div className="clearfix" />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchBook()}
                </ul>
              </div>
            </div>
            <div className="item-small-title">
              <span>
                {this.state.publisher_name || publication.publisher_name}
              </span>
              <InputSearch title="Search Publishers" makeSearch={(newValue) => this.searchPublishers(newValue)} />
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
                      <input
                        name="download_url"
                        value={this.state.download_url}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>ISBN</td>
                    <td>
                      <input
                        name="isbn"
                        value={this.state.isbn}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cover No</td>
                    <td>
                      <input
                        name="cover_no"
                        type="number"
                        value={this.state.cover_no}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Page Number</td>
                    <td>
                      <input
                        name="page_number"
                        type="number"
                        value={this.state.page_number}
                        onChange={(event) => this.handleChange(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Added By</td>
                    <td>{ publication.added_by }</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-file-container">
              <InputUpload
                accept="image/jpeg, image/png"
                title="Upload cover image"
                onUpload={(res) => this.onImageUpload(res)}
              />
              <InputUpload
                accept="application/pdf,.pdf,.doc,.txt,.docx,lit,rtf"
                title="Upload book file"
                onUpload={(res) => this.onFileUpload(res)}
              />
            </div>
            <div className="item-lists-container">
              <div className="item-lists  ">
                <h5>Lists</h5>
                <ListsOfPublicationEdit lists={this.state.lists} onListsChange={(lists) => this.onListsChange(lists)} />
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div >
            <button className="btn btn-primary" onClick={() => this.saveForm()}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
AdminPublicationsEditComponent.propTypes = {
  getPublicationDetails: PropTypes.func.isRequired,
  getBookBySearch: PropTypes.func.isRequired,
  resetGetBookBySearch: PropTypes.func.isRequired,
  getPublisherBySearch: PropTypes.func.isRequired,
  resetGetPublisherBySearch: PropTypes.func.isRequired,
  updatePublicationDetails: PropTypes.func.isRequired,
  publication: PropTypes.object.isRequired,
  bookSearch: PropTypes.arrayOf(Object).isRequired,
  publisherSearch: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.object.isRequired
};

export default AdminPublicationsEditComponent;
