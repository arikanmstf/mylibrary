import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBookDetails } from '../../actions/ResolvedGetBookDetails';
import { getWriterBySearch, resetGetWriterBySearch } from '../../actions/ResolvedGetWriterBySearch';
import { updatePublicationDetails } from '../../actions/ResolvedSetAdminForm';
import TagsOfPublicationEdit from '../../components/TagsOfPublicationEdit';
import { fromArrayToCommaEdit } from '../../common/Helpers';

class AdminBooksEditPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      book_id: 0,
      description: '',
      publishers: [],
      writers: [],
      title: '',
      tags: [],
      new_writer: '',
      ...props
    };

    this.onNewPublisherChange = this.onNewPublisherChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onNewWriterChange = this.onNewWriterChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.searchWriters = this.searchWriters.bind(this);
    this.addNewWriter = this.addNewWriter.bind(this);
    this.removeWriter = this.removeWriter.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getBookDetails(this.state.bookId);
  }

  componentWillReceiveProps(nextProps) {
		this.setState({
      title: nextProps.book.title,
      writers: (this.state.writers.length > 0) ? this.state.writers : nextProps.book.writers,
      description: nextProps.book.description,
      tags: nextProps.book.tags,
    });
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
  onNewWriterChange(event) {
    this.setState({
      new_writer: event.target.value
    });
  }
  addNewWriter(writer) {
    const writers = this.state.writers;
    writers.push({ value: writer.full_name, key: writer.writer_id });
    this.setState({ writers, new_writer: '' });
    this.props.resetGetWriterBySearch();
  }
  searchWriters() {
    this.props.getWriterBySearch(this.state.new_writer);
  }

  saveForm() {
    const form = {
      book_id: this.props.book.book_id,
      title: this.state.title,
      writers: this.state.writers,
      tags: this.state.tags,
      publisher_id: this.state.publisher_id,
      description: this.state.description
    };
    this.props.updatePublicationDetails(form);
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
              <button className="btn btn-search right" onClick={this.searchWriters}>
                <i className="glyphicon glyphicon-search" />
              </button>
              <input
                className="input-title right"
                placeholder="Search writers"
                value={this.state.new_writer}
                onChange={this.onNewWriterChange}
              />
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
								<TagsOfPublicationEdit tags={this.state.tags} />
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
AdminBooksEditPage.propTypes = {
  getBookDetails: PropTypes.func.isRequired,
  getWriterBySearch: PropTypes.func.isRequired,
  resetGetWriterBySearch: PropTypes.func.isRequired,
  updatePublicationDetails: PropTypes.func.isRequired,
	book: PropTypes.object.isRequired,
	writerSearch: PropTypes.arrayOf(Object).isRequired,
};

function mapStateToProps(state) {
	return {
		book: state.book,
		writerSearch: state.writerSearch,
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookDetails: (search) => dispatch(getBookDetails(search)),
    getWriterBySearch: (search) => dispatch(getWriterBySearch(search)),
    resetGetWriterBySearch: () => dispatch(resetGetWriterBySearch()),
    updatePublicationDetails: (form) => dispatch(updatePublicationDetails(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooksEditPage);
