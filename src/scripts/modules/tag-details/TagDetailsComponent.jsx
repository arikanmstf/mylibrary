import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { commaListItems } from 'common/Helpers';

class TagDetailsComponent extends Component {

  componentDidMount() {
    this.props.getTagDetails(this.props.match.params.tagId);
  }

  render() {
    const tag = this.props.tag;
    return tag ? (
      <div className="item-details-page tag-details">
				<div className="item-details-container">
					<div className="col-md-12 col-sm-12 item-info">
						<div className="item-title">
							<span>{tag.title}</span>
						</div>
            <span className="item-light-title">Books on the Tag</span>
            <div className="item-small-title">
							{commaListItems(tag.books, tag.book_ids, 'books')}
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-12" />
				</div>
			</div>
    ) : null;
  }
}
TagDetailsComponent.propTypes = {
  getTagDetails: PropTypes.func.isRequired,
  tag: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default TagDetailsComponent;
