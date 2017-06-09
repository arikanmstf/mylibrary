import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListsOfPublication extends Component {

	renderList(){
		return this.props.lists.map((list) => {
			return (
				<div key={list.list_id}>
					<Link to={`/lists/${list.list_id}`} >
						<div className="list">
								{list.title}
						</div>
					</Link>
				</div>
				)
		});
	}

	render(){
		let lists = this.props.lists;
		return lists ? (
			<div className="lists-of-publication">
						{ this.renderList() }
			</div>
		) : null;
	}
}
ListsOfPublication.propTypes = {
	lists: propTypes.ArrayOf(Object).isRequired
};

export default ListsOfPublication;
