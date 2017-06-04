import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPublicationDetails } from '../actions/resolvedGetPublicationDetails';
import ListsOfPublication from '../containers/listsOfPublication';

class PublicationDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getPublicationDetails(this.state.publicationId);
	}

	setWriters(writers,writer_ids) {

		if(!writers) return null;
		let writerArr = writers.split(",");
		let writerIdsArr = writer_ids.split(",");
		const rowLen = writerArr.length;

		return writerArr = writerArr.map((w,i)=>{
			return <span key={w}><Link to={`/writers/${writerIdsArr[i]}`}>{w}</Link>{rowLen === i+1 ? null : ', '}</span>
		});
	}

	render() {
		let publication = this.props.publication;
		const linkStyle = {color:'#AAAAAA'};
		return publication && (
			<div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-3 col-sm-3 item-info image-container">
						<img
							className="item-image"
							src={`/assets/img/cover/${ publication.publication_id }.jpg`} />
					</div>
					<div className="col-md-9 col-sm-9 item-info">
						<div className="item-title">
							<span>{ publication.title }</span>
						</div>
						<div className="item-small-title">
							{ this.setWriters(publication.writers, publication.writer_ids) }
						</div>
						<div className="item-light-title">
							<span><Link style={linkStyle} to={`/publishers/${publication.publisher_id}`}>{ publication.publisher_name }</Link></span>
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
										<td>Added By</td>
										<td>{ publication.added_by }</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="item-lists">
							<ListsOfPublication publicationId={ this.state.publicationId } />
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="col-md-12">

					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	return {
		publication: state.publication
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getPublicationDetails: (search) => dispatch(getPublicationDetails(search)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetailsPage);
