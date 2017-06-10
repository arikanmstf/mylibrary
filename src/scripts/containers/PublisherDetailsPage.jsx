import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPublisherDetails } from '../actions/ResolvedGetPublisherDetails';
import { commaListItems } from '../common/Helpers';

class PublisherDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getPublisherDetails(this.state.publisherId);
	}

	render() {
		const publisher = this.props.publisher;
		return publisher ? (
      <div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{publisher.name}</span>
						</div>
            <span className="item-light-title">Books on the Publisher</span>
            <div className="item-small-title">
							{commaListItems(publisher.publications, publisher.publication_ids, 'publications')}
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
		) : null;
	}
}
PublisherDetailsPage.propTypes = {
  getPublisherDetails: PropTypes.func.isRequired,
	publisher: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	// whatever is returned will show up
	// as props inside of BookList
	return {
		publisher: state.publisher
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return { getPublisherDetails: (publisherId) => dispatch(getPublisherDetails(publisherId)) };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublisherDetailsPage);
