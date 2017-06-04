import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBookDetails } from '../actions/resolvedGetBookDetails';

class BookDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getBookDetails(this.state.bookId);
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
		let book = this.props.book;
		const linkStyle = {color:'#AAAAAA'};
		return book ? (
			<div className="item-details-page">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{ book.title }</span>
						</div>
						<div className="item-small-title">
							{ this.setWriters(book.writers, book.writer_ids) }
						</div>
						<p className="item-description">
							{ book.description }
						</p>
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
		book: state.book
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getBookDetails: (book_id) => dispatch(getBookDetails(book_id)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
