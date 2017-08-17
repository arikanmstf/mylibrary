import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagsOfPublicationEdit from 'modules/common/TagsOfPublicationEdit';
import InputSearch from 'common/input/InputSearch';
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

    this.onTagsChange = this.onTagsChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.searchWriters = this.searchWriters.bind(this);
    this.addNewWriter = this.addNewWriter.bind(this);
    this.removeWriter = this.removeWriter.bind(this);
    this.saveForm = this.saveForm.bind(this);
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
  onDescChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  onNewPublisherChange(event) {
    this.setState({
      new_publisher: event.target.value
    });
  }
  onTitleChange(event) {
    this.setState({
      title: event.target.value
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

  saveForm() {
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

  removeWriter(w) {
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
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
            <div className="item-title">
              <input value={this.state.title} onChange={this.onTitleChange} />
            </div>
						<div className="item-small-title">
							{ fromArrayToCommaEdit(this.state.writers, 'admin/writers/edit', this.removeWriter) }
              <InputSearch title="Search for Writers" makeSearch={this.searchWriters} />
              <div className="item-search-results">
                <ul>
                  {this.renderSearchWriter()}
                </ul>
              </div>
						</div>
            <p className="item-description">
							<textarea onChange={this.onDescChange} value={this.state.description} />
						</p>
						<div className="item-lists-container">
							<div className="item-lists col-sm-12 col-xs-12">
								<h5>Tags</h5>
								<TagsOfPublicationEdit tags={this.props.book.tags} onTagsChange={this.onTagsChange} />
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
