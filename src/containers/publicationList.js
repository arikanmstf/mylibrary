//book-list.js
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPublications } from '../actions/resolvedGetAllPublications';
import { bindActionCreators } from 'redux';

class PublicationList extends Component {

	renderList() {
		return this.props.publications.map((publication)=> {
			return (
					<li
						key={publication.title}
						className="list-group-item">
						{publication.title}
					</li>
				);
		});
	}

	render() {
		return(
				<ul onEnter={() => this.props.getAllPublications()} className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	console.log(state)
	return {
		publications : state.publications
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getAllPublications: () => dispatch(getAllPublications()) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
