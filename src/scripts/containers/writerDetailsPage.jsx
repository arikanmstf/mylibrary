import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWriterDetails } from '../actions/resolvedGetWriterDetails';

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
			<div className="writer-details-page">
				<div className="writer-details-container">
					<div className="col-md-3 col-sm-3 writer-info">
					</div>
					<div className="col-md-9 col-sm-9 writer-info">
						<div className="Writer-title">
							<span>{ writer.full_name }</span>
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
