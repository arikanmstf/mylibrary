import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListsOfPublication } from '../actions/resolvedGetListsOfPublication';

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
			return <li key={ list.list_id }>{ list.list_id }</li>
		});
	}

	render() {
		let lists = this.props.lists;
		console.log(this.props)
		return lists ? (
			<div className="lists-of-publication">
				<ul>
					{ this.renderList() }
				</ul>
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
  return { getListsOfPublication: (search) => dispatch(getListsOfPublication(search)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ListsOfPublication);