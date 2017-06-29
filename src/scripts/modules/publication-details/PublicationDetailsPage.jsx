import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListsOfPublicationEdit from 'modules/common/ListsOfPublicationEdit';
import { commaListItems } from 'common/Helpers';
import { getPublicationDetails } from './PublicationDetailsActions';
import { updatePublicationDetailsList } from '../admin/AdminActions';

class PublicationDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;

		this.saveForm = this.saveForm.bind(this);
  }

	componentDidMount() {
		this.props.getPublicationDetails(this.state.publicationId);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
      lists: nextProps.publication.lists
    });
	}

	saveForm() {
		const form = {
			publication_id: this.state.publicationId,
			lists: this.state.lists
		};
		this.props.updatePublicationDetailsList(form);
	}

	render() {
		const publication = this.props.publication;
		const linkStyle = { color: '#AAAAAA' };
		return publication && (
			<div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-3 col-sm-3 item-info image-container">
						<img
							className="item-image"
							src={`/assets/img/cover/${publication.publication_id}.jpg`}
						/>
					</div>
					<div className="col-md-9 col-sm-9 item-info">
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
						<div className="item-table">
							<table className="table table-responsive">
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
								<ListsOfPublicationEdit lists={publication.lists} />
							</div>
						</div>
						<div className="col-md-12" >
							<button className="btn btn-primary" onClick={this.saveForm}>Save</button>
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
		);
	}
}
PublicationDetailsPage.propTypes = {
  getPublicationDetails: PropTypes.func.isRequired,
  updatePublicationDetailsList: PropTypes.func.isRequired,
	publication: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		publication: state.publication,
		listSearch: state.listSearch
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
		getPublicationDetails: (search) => dispatch(getPublicationDetails(search)),
		updatePublicationDetailsList: (search) => dispatch(updatePublicationDetailsList(search))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetailsPage);
