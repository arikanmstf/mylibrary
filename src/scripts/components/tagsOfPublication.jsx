import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TagsOfPublication extends Component {

	renderTag() {
		return this.props.tags.map(tag => {
			return (
				<div key={ tag.tag_id }>
					<Link to={ `/tags/${tag.tag_id}` }>
						<div className="list">
								{ tag.title }
						</div>
					</Link>
				</div>
				)
		});
	}

	render() {
		let tags = this.props.tags;
		return tags ? (
			<div className="lists-of-publication">
						{ this.renderTag() }
			</div>
		) : null
	}
}
