import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from 'config';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

import TagsOfPublicationEdit from 'modules/common/tags-of-publication/TagsOfPublicationEdit';
import InputSearch from 'modules/common/input-search/InputSearch';
import { fromArrayToCommaEdit } from 'common/Helpers';

class AdminBooksAddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book_id: 0,
      description: '',
      publishers: [],
      writers: [],
      title: '',
      tags: []
    };
  }

  onTagsChange = (tags) => {
    this.tags = tags;
  }
  onTitleChange = (value) => {
    this.setState({
      title: value
    });
  }
  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }
  addNewWriter = (writer) => {
    const writers = this.state.writers;
    for (let i = 0; i < writers.length; i++) {
      if (writers[i].key === writer.writer_id) {
        return false;
      }
    }
    writers.push({ value: writer.full_name, key: writer.writer_id });
    this.setState({ writers });
    this.props.resetGetWriterBySearch();
    return true;
  }
  searchWriters = (newValue) => {
    this.props.getWriterBySearch(newValue);
  }
  searchBooks = (newValue) => {
    this.props.getBookBySearch(newValue);
  }
  saveForm = () => {
    const form = {
      title: this.state.title,
      writers: this.state.writers,
      tags: this.tags,
      publisher_id: this.state.publisher_id,
      description: this.state.description
    };
    this.props.addBookDetails(form);
  }

  removeWriter = (w) => {
    const writers = [];
    for (let i = 0; i < this.state.writers.length; i++) {
      if (this.state.writers[i].key !== w.key) {
        writers.push(this.state.writers[i]);
      }
    }

    this.setState({ writers });
  }

  renderSearchWriter() {
    const writerSearch = this.props.writerSearch;
    return writerSearch && (this.props.writerSearch.map((writer) => {
      return (
        <li key={writer.writer_id} onClick={() => this.addNewWriter(writer)}>{writer.full_name}</li>
      );
    }));
  }
  renderSearchBook() {
    const bookSearch = this.props.bookSearch;
    return bookSearch && (this.props.bookSearch.map((book) => {
      return (
        <li key={book.book_id}><Link to={`${config.homeUrl}admin/books/edit/${book.book_id}`}>{book.title}</Link></li>
      );
    }));
  }

  render() {
    return true && (
      <div className="item-details-page   ">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-title">
              <InputSearch title="Book Title" onChange={this.onTitleChange} makeSearch={this.searchBooks} />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchBook()}
                </ul>
              </div>
            </div>
            <div className="item-small-title">
              { fromArrayToCommaEdit(this.state.writers, 'admin/writers/edit', this.removeWriter) }
              <InputSearch title="Search Writers" makeSearch={this.searchWriters} />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchWriter()}
                </ul>
              </div>
            </div>
            <Input
              type="text"
              name="description"
              label="Description"
              value={this.state.description}
              onChange={this.handleChange}
              multiline
            />
            <div className="item-lists-container">
              <div className="item-lists">
                <h5>Tags</h5>
                <TagsOfPublicationEdit onTagsChange={this.onTagsChange} />
              </div>
            </div>
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminBooksAddComponent.propTypes = {
  getWriterBySearch: PropTypes.func.isRequired,
  getBookBySearch: PropTypes.func.isRequired,
  resetGetWriterBySearch: PropTypes.func.isRequired,
  addBookDetails: PropTypes.func.isRequired,
  writerSearch: PropTypes.arrayOf(Object).isRequired,
  bookSearch: PropTypes.arrayOf(Object).isRequired
};

export default AdminBooksAddComponent;
