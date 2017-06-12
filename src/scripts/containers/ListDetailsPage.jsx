import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getListDetails } from '../actions/ResolvedGetListDetails';
import { commaListItems } from '../common/Helpers';

class ListDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getListDetails(this.state.listId);
	}

	render() {
		const list = this.props.list;
		return list ? (
      <div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{list.title}</span>
						</div>
            <span className="item-light-title">Books on the List</span>
            <div className="item-small-title">
							{commaListItems(list.publications, list.publication_ids, 'publications')}
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
		) : null;
	}
}
ListDetailsPage.propTypes = {
  getListDetails: PropTypes.func.isRequired,
	list: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		list: state.list
	};
}

const mapDispatchToProps = (dispatch) => {
  return { getListDetails: (listId) => dispatch(getListDetails(listId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDetailsPage);
