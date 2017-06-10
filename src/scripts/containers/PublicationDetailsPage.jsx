import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPublicationDetails } from '../actions/ResolvedGetPublicationDetails';
import ListsOfPublication from '../components/ListsOfPublication';
import TagsOfPublication from '../components/TagsOfPublication';
import { commaListItems } from '../common/Helpers';

class PublicationDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getPublicationDetails(this.state.publicationId);
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
										<td>Print Number</td>
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
								<ListsOfPublication lists={publication.lists} />
							</div>
							<div className="item-lists">
								<h5>Tags</h5>
								<TagsOfPublication tags={publication.tags} />
							</div>
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
	publication: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	// whatever is returned will show up
	// as props inside of BookList
	return {
		publication: state.publication
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return { getPublicationDetails: (search) => dispatch(getPublicationDetails(search)) };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetailsPage);
