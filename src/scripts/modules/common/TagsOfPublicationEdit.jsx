import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputSearch from 'common/input/InputSearch';
import { getTagBySearch, resetGetTagBySearch } from 'modules/tag-details/TagDetailsActions';

class TagsOfPublicationEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };

    this.searchTags = this.searchTags.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      tags: (this.state.tags.length > 0) ? this.state.tags : nextProps.tags
    });
  }
  searchTags(newValue) {
    this.props.getTagBySearch(newValue);
  }
  addNewTag(tag) {
    const tags = this.state.tags;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].tag_id === tag.tag_id) {
        return false;
      }
    }
    tags.push(tag);
    this.setState({ tags });
    this.props.resetGetTagBySearch();
    this.props.onTagsChange(tags);
    return true;
  }
  removeTag(t) {
    const tags = [];
    for (let i = 0; i < this.state.tags.length; i++) {
      if (this.state.tags[i].tag_id !== t.tag_id) {
        tags.push(this.state.tags[i]);
      }
    }
    this.setState({ tags });
    this.props.onTagsChange(tags);
  }

  renderSearchTag() {
    const tagSearch = this.props.tagSearch;
    return tagSearch && (this.props.tagSearch.map((tag) => {
      return (
        <li key={tag.tag_id} onClick={() => this.addNewTag(tag)}>{tag.title}</li>
      );
    }));
  }

  renderTag() {
    return this.state.tags.map((tag) => {
      return (
        <span
          onClick={() => this.removeTag(tag)}
          key={tag.tag_id}
        >
					{tag.title}
          <i className="glyphicon glyphicon-remove" />
        </span>
      );
    });
  }

  render() {
    const tags = this.state.tags;
    return tags ? (
			<div className="lists-of-publication">
						<div className="list-list">{this.renderTag()}</div>
            <InputSearch title="Search for tags" makeSearch={this.searchTags} />
            <div className="item-search-results">
              <ul>
                {this.renderSearchTag()}
              </ul>
            </div>
			</div>
    ) : null;
  }
}
TagsOfPublicationEdit.propTypes = {
  tags: PropTypes.arrayOf(Object),
  tagSearch: PropTypes.arrayOf(Object).isRequired,
  getTagBySearch: PropTypes.func.isRequired,
  resetGetTagBySearch: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired
};
TagsOfPublicationEdit.defaultProps = {
  tags: []
};

function mapStateToProps(state) {
  return {
    tagSearch: state.tagSearch
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTagBySearch: (search) => dispatch(getTagBySearch(search)),
    resetGetTagBySearch: () => dispatch(resetGetTagBySearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsOfPublicationEdit);
