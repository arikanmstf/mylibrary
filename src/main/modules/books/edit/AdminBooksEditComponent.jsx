import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

import TagsOfPublicationEdit from 'common/layout/tags-of-publication/TagsOfPublicationEdit';
import InputSearch from 'common/layout/input-search/InputSearch';
import { fromArrayToCommaEdit } from 'common/Helpers';

class AdminBooksEditComponent extends Component {

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

  componentDidMount() {
    this.props.getBookDetails(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.book.title,
      writers: nextProps.book.writers,
      description: nextProps.book.description,
      tags: nextProps.book.tags,
    });
  }
  onTagsChange(tags) {
    this.tags = tags;
  }
  onNewPublisherChange(event) {
    this.setState({
      new_publisher: event.target.value
    });
  }
  addNewWriter(writer) {
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
  searchWriters(newValue) {
    this.props.getWriterBySearch(newValue);
  }
  handleChange = (value, ev) => {
    this.setState({
      [ev.target.name]: value
    });
  }

  saveForm = () => {
    const form = {
      book_id: this.props.book.book_id,
      title: this.state.title,
      writers: this.state.writers,
      tags: this.tags,
      publisher_id: this.state.publisher_id,
      description: this.state.description
    };
    this.props.updateBookDetails(form);
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

  render() {
    const book = this.props.book;
    return book && (
      <div className="item-details-page">
        <div className="item-details-container">
          <div className="item-info">
            <div className="item-title">
              <Input
                type="text"
                name="title"
                value={this.state.title}
                label="Title"
                onChange={this.handleChange}
              />
            </div>
            <div className="item-small-title">
              { fromArrayToCommaEdit(this.state.writers, 'admin/writers/edit', this.removeWriter) }
              <InputSearch title="Search for Writers" makeSearch={(newValue) => this.searchWriters(newValue)} />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchWriter()}
                </ul>
              </div>
            </div>
            <p className="item-description">
              <Input
                type="text"
                name="description"
                label="Description"
                value={this.state.description}
                onChange={this.handleChange}
                multiline
              />
            </p>
            <div className="item-lists-container">
              <div className="item-lists">
                <h5>Tags</h5>
                <TagsOfPublicationEdit
                  tags={this.props.book.tags}
                  onTagsChange={(tags) => this.onTagsChange(tags)}
                />
              </div>
            </div>
          </div>
        </div>
        <Button onClick={this.saveForm} label="Save Form" raised primary />
      </div>
    );
  }
}
AdminBooksEditComponent.propTypes = {
  getBookDetails: PropTypes.func.isRequired,
  getWriterBySearch: PropTypes.func.isRequired,
  resetGetWriterBySearch: PropTypes.func.isRequired,
  updateBookDetails: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  writerSearch: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.object.isRequired
};

export default AdminBooksEditComponent;
