import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListsOfPublication } from '../actions/resolvedGetListsOfPublication';
import List from './list';

class ListsOfPublication extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getListsOfPublication(this.state.publicationId);
	}

	renderList() {

		return this.props.lists.map(list => {
			return <List key={ list.list_id } listId={ list.list_id } />
		});
	}

	render() {
		let lists = this.props.lists;
		return lists ? (
			<div className="lists-of-publication">
					{ this.renderList() }
			</div>
		) : null
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	return {
		lists: state.lists
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getListsOfPublication: (publicationId) => dispatch(getListsOfPublication(publicationId)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ListsOfPublication);
