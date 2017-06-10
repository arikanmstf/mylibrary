import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTagDetails } from '../actions/ResolvedGetTagDetails';
import { commaListItems } from '../common/Helpers';

class TagDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getTagDetails(this.state.tagId);
	}

	render() {
		const tag = this.props.tag;
		return tag ? (
      <div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{tag.title}</span>
						</div>
            <span className="item-light-title">Books on the Tag</span>
            <div className="item-small-title">
							{commaListItems(tag.books, tag.book_ids, 'books')}
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
		) : null;
	}
}
TagDetailsPage.propTypes = {
  getTagDetails: PropTypes.func.isRequired,
	tag: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	// whatever is returned will show up
	// as props inside of BookList
	return {
		tag: state.tag
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return { getTagDetails: (tagId) => dispatch(getTagDetails(tagId)) };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(TagDetailsPage);
