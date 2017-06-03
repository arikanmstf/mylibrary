import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListById } from '../actions/resolvedGetListById';

class List extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getListById(this.state.listId);
	}

	render() {
		let list = this.props.list;
    console.log(list);

		return list ? (
			<div className="list">
					{ list.title }
			</div>
		) : null
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	return {
		list: state.list
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getListById: (listId) => dispatch(getListById(listId)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(List);
