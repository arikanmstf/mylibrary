import React, { Component } from 'react';
import Link from 'react-toolbox/lib/link/Link';
import PropTypes from 'prop-types';
import config from 'config';

class TagsOfPublication extends Component {
  renderTag() {
    return this.props.tags.map((tag) => {
      return (
        <div key={tag.tag_id} >
          <Link href={`${config.homeUrl}tags/${tag.tag_id}`} >
            <div>
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
      <div>
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
