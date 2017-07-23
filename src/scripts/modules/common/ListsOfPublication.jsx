import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

class ListsOfPublication extends Component {

	renderList() {
		return this.props.lists.map((list) => {
			return (
				<div key={list.list_id}>
					<Link to={`${config.homeUrl}lists/${list.list_id}`} >
						<div className="list">
								{list.title}
						</div>
					</Link>
				</div>
			);
		});
	}

	render() {
		const lists = this.props.lists;
		return lists ? (
			<div className="lists-of-publication">
						{ this.renderList() }
			</div>
		) : null;
	}
}
ListsOfPublication.propTypes = {
	lists: PropTypes.arrayOf(Object).isRequired
};
ListsOfPublication.defaultProps = {
  lists: [],
};

export default ListsOfPublication;
