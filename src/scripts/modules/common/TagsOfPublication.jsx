import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TagsOfPublication extends Component {

	renderTag() {
		return this.props.tags.map((tag) => {
			return (
				<div key={tag.tag_id} >
					<Link to={`/tags/${tag.tag_id}`} >
						<div className="list">
								{tag.title}
						</div>
					</Link>
				</div>
			);
		});
	}

	render() {
		const tags = this.props.tags;
		return tags ? (
			<div className="lists-of-publication">
						{this.renderTag()}
			</div>
		) : null;
	}
}
TagsOfPublication.propTypes = {
	tags: PropTypes.arrayOf(Object).isRequired
};
TagsOfPublication.defaultProps = {
  tags: [],
};

export default TagsOfPublication;
