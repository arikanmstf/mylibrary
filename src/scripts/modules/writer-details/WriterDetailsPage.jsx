import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { commaListItems } from 'common/Helpers';
import { getWriterDetails } from '../admin/admin-writers/AdminWritersActions';

class WriterDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getWriterDetails(this.state.writerId);
	}

	render() {
		const writer = this.props.writer;
		const writerBirth = (writer.birth_date ? ('Birth: ' + writer.birth_date) : '');
		const writerDeath = (writer.death_date ? (', Death: ' + writer.death_date) : '');
		const writerLife = writerBirth + writerDeath;

		return writer ? (
      <div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{writer.full_name}</span>
						</div>
						<div className="item-light-title">
							{writerLife}
						</div>
						<div className="item-light-title">
							<span>{writer.citizenship}</span>
						</div>
						<p className="item-description">
							{writer.description}
						</p>
            <span className="item-light-title">Books of the Writer</span>
            <div className="item-small-title">
							{commaListItems(writer.books, writer.book_ids, 'books')}
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
		) : null;
	}
}
WriterDetailsPage.propTypes = {
  getWriterDetails: PropTypes.func.isRequired,
	writer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		writer: state.writer
	};
}

const mapDispatchToProps = (dispatch) => {
  return { getWriterDetails: (writerId) => dispatch(getWriterDetails(writerId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriterDetailsPage);
