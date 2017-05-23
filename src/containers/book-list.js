//book-list.js
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';

class BookList extends Component {
	componentWillMount() {
		var self = this;
		axios.get('http://localhost/MyLibraryV2_Services/publications/get_all')
	  .then(function (response) {
	    self.setState({
				books: response.data.response
			});
			self.forceUpdate();
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	renderList() {
		return this.props.books.map( (book)=> {
			return (
					<li
						key={book.title}
						className="list-group-item">
						{book.title}
					</li>
				);
		});
	}

	render() {
		return(
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList

	return {
		books : state.books
	};
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
	//whenever selectBook is called , the result should be passed
	//to all of our reducers...
	//return bindActionCreators ({selectBook : selectBook},dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps)(BookList);
