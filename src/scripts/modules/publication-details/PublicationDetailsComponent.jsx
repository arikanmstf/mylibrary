import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListsOfPublicationEdit from 'modules/common/ListsOfPublicationEdit';
import { commaListItems } from 'common/Helpers';

class PublicationDetailsComponent extends Component {

	constructor(props) {
    super(props);
    this.state = {
			lists: props.publication.lists
		};
		this.onListsChange = this.onListsChange.bind(this);
  }

	componentDidMount() {
		this.props.getPublicationDetails(this.props.match.params.publicationId);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
      lists: nextProps.publication.lists
    });
	}

	onListsChange(lists) {
		this.setState({ lists });
	}

	saveForm() {
		const form = {
			publication_id: this.props.match.params.publicationId,
			lists: this.state.lists
		};
		this.props.updatePublicationDetailsList(form);
	}

	render() {
		const publication = this.props.publication;
		const linkStyle = { color: '#AAAAAA' };
		return publication && (
			<div className="item-details-page publication-details">
				<div className="item-details-container">
					<div className="col-md-3 col-sm-3 item-info image-container">
						<img
							className="item-image"
							src={`/assets/img/cover/${publication.publication_id}.jpg`}
						/>
					</div>
					<div className="col-md-9 col-sm-9 item-info content-container">
						<div className="item-title">
							<span>{ publication.title }</span>
						</div>
						<div className="item-small-title">
							{ commaListItems(publication.writers, publication.writer_ids, 'writers') }
						</div>
						<div className="item-light-title">
							<span><Link style={linkStyle} to={`/publishers/${publication.publisher_id}`}>{publication.publisher_name}</Link></span>
						</div>
						<p className="item-description">
							{ publication.description }
						</p>
						<div className="item-buttons">
              { publication.can_download ?
								<button className="btn btn-success">
                  <span>Download</span>
                  <i className="glyphicon glyphicon-download-alt" />
                </button> : null }
						</div>
						<div className="item-table">
							<table className="table table-responsive table-hover">
								<tbody>
									{ publication.isbn &&
									<tr>
										<td>ISBN</td>
										<td>{ publication.isbn }</td>
									</tr> }
									<tr>
										<td>Cover No</td>
										<td>{ publication.cover_no }</td>
									</tr>
									<tr>
										<td>Page Number</td>
										<td>{ publication.page_number }</td>
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
								<ListsOfPublicationEdit lists={publication.lists} onListsChange={this.onListsChange} />
							</div>
						</div>
						<button className="btn btn-primary" onClick={(e) => this.saveForm(e)}>Save</button>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
		);
	}
}
PublicationDetailsComponent.propTypes = {
  getPublicationDetails: PropTypes.func.isRequired,
  updatePublicationDetailsList: PropTypes.func.isRequired,
	publication: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};

export default PublicationDetailsComponent;
