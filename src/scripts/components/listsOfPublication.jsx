import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './list';

export default class ListsOfPublication extends Component {

	renderList() {
		return this.props.lists.map(list => {
			return (
				<div key={ list.list_id }>
					<Link to={ `/lists/${list.list_id}` }>
						<List  list={ list } />
					</Link>
				</div>
				)
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
