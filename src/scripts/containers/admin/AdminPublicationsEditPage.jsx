import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPublicationDetails } from '../../actions/ResolvedGetPublicationDetails';
import { getWriterBySearch } from '../../actions/ResolvedGetWriterBySearch';
import ListsOfPublication from '../../components/ListsOfPublication';
import TagsOfPublication from '../../components/TagsOfPublication';
import { fromArrayToCommaEdit, fromCommaToArray } from '../../common/Helpers';

class AdminPublicationsEditPage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      writers: [],
      publisher_name: '',
      description: '',
      isbn: '',
      cover_no: 0,
      page_number: 0,
      new_writer: '',
      ...props
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPublisherChange = this.onPublisherChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onIsbnChange = this.onIsbnChange.bind(this);
    this.onCoverChange = this.onCoverChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onNewWriterChange = this.onNewWriterChange.bind(this);
    this.listWriters = this.listWriters.bind(this);
    this.addNewWriter = this.addNewWriter.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    this.props.getPublicationDetails(this.state.publicationId);
  }

  componentWillReceiveProps(nextProps) {
		this.setState({
      title: nextProps.publication.title,
      writers: (this.state.writers.length > 0) ?
        this.state.writers :
        fromCommaToArray(nextProps.publication.writers, nextProps.publication.writer_ids),
      publisher_name: nextProps.publication.publisher_name,
      description: nextProps.publication.description,
      isbn: nextProps.publication.isbn || '',
      cover_no: nextProps.publication.cover_no,
      page_number: nextProps.publication.page_number
    });
	}

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  onPublisherChange(event) {
    this.setState({
      publisher_name: event.target.value
    });
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
  onNewWriterChange(event) {
    this.setState({
      new_writer: event.target.value
    });
  }
  addNewWriter(writer) {
    const writers = this.state.writers;
    writers.push({ value: writer.full_name, key: writer.writer_id });
    this.setState({ writers });
  }
  listWriters() {
    this.props.getWriterBySearch(this.state.new_writer);
  }

  saveForm() {
    console.log(this.state);
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
		const publication = this.props.publication;
		return publication && (
			<div className="item-details-page col-md-9 col-sm-9 col-">
				<div className="item-details-container">
					<div className="col-md-3 col-sm-3 item-info image-container">
						<img
							className="item-image"
							src={`/assets/img/cover/${publication.publication_id}.jpg`}
						/>
					</div>
					<div className="col-md-9 col-sm-9 item-info">
						<div className="item-title">
							<input className="input-title" value={this.state.title} onChange={this.onTitleChange} />
						</div>
						<div className="item-small-title">
							{ fromArrayToCommaEdit(this.state.writers, 'writers') }
              <input className="input-title" value={this.state.new_writer} onChange={this.onNewWriterChange} />
              <button className="btn btn-primary" onClick={this.listWriters}>List Writers</button>

              <div className="item-search-results">
                <ul>
                  {this.renderSearchWriter()}
                </ul>
              </div>
						</div>
						<div className="item-small-title">
							<span>
                <input className="input-title" value={this.state.publisher_name} onChange={this.onPublisherChange} />
              </span>
						</div>
						<p className="item-description">
							<textarea value={this.state.description} onChange={this.onDescChange} />
						</p>
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
									<tr>
										<td>Added By</td>
										<td>{ publication.added_by }</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="item-lists-container">
							<div className="item-lists">
								<h5>Lists</h5>
								<ListsOfPublication lists={publication.lists} />
							</div>
							<div className="item-lists">
								<h5>Tags</h5>
								<TagsOfPublication tags={publication.tags} />
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
AdminPublicationsEditPage.propTypes = {
  getPublicationDetails: PropTypes.func.isRequired,
  getWriterBySearch: PropTypes.func.isRequired,
	publication: PropTypes.object.isRequired,
	writerSearch: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state) {
	// whatever is returned will show up
	// as props inside of BookList
	return {
		publication: state.publication,
		writerSearch: state.writerSearch,
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return {
    getPublicationDetails: (search) => dispatch(getPublicationDetails(search)),
    getWriterBySearch: (search) => dispatch(getWriterBySearch(search))
  };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(AdminPublicationsEditPage);
