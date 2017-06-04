import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWriterDetails } from '../actions/resolvedGetWriterDetails';
import { commaListItems } from '../common/helpers';

class WriterDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getWriterDetails(this.state.writerId);
	}

	render() {
		let writer = this.props.writer;
		return writer ? (
      <div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{ writer.full_name }</span>
						</div>

						<div className="item-light-title">
							<span>{ writer.citizenship }</span>
						</div>
						<p className="item-description">
							{ writer.description }
						</p>
            <span className="item-light-title">Books of the Writer</span>
            <div className="item-small-title">
							{ commaListItems(writer.books, writer.book_ids, "books") }
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="col-md-12">

					</div>
				</div>
			</div>
		) : null
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	return {
		writer: state.writer
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getWriterDetails: (writer_id) => dispatch(getWriterDetails(writer_id)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(WriterDetailsPage);
