import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getTagBySearch, resetGetTagBySearch } from '../actions/ResolvedGetTagBySearch';

class TagsOfPublicationEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      new_tag: '',
      tags: []
    };

    this.onNewTagChange = this.onNewTagChange.bind(this);
    this.searchTags = this.searchTags.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      tags: (this.state.tags.length > 0) ? this.state.tags : nextProps.tags
    });
  }

  onNewTagChange(event) {
    this.setState({
      new_tag: event.target.value
    });
  }
  searchTags() {
    this.props.getTagBySearch(this.state.new_tag);
  }
  addNewTag(tag) {
    const tags = this.state.tags;
    tags.push(tag);
    this.setState({ tags, new_tag: '' });
    this.props.resetGetTagBySearch();
  }
  removeTag(t) {
    const tags = [];
    for (let i = 0; i < this.state.tags.length; i++) {
      if (this.state.tags[i].tag_id !== t.tag_id) {
        tags.push(this.state.tags[i]);
      }
    }
    this.setState({ tags });
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
				<div key={tag.tag_id}>
					<Link to={`/admin/tags/edit/${tag.tag_id}`} >
						<span className="list">
								{tag.title}
						</span>
					</Link>
          <i onClick={() => this.removeTag(tag)} className="glyphicon glyphicon-remove" />
				</div>
			);
		});
	}

	render() {
		const tags = this.state.tags;
		return tags ? (
			<div className="lists-of-publication">
						{this.renderTag()}
            <input
              placeholder="Search for tags"
              value={this.state.new_tag}
              onChange={this.onNewTagChange}
            />
          <button className="btn btn-search" onClick={this.searchTags}>
              <i className="glyphicon glyphicon-search" />
            </button>
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
	tags: PropTypes.arrayOf(Object).isRequired,
  tagSearch: PropTypes.arrayOf(Object).isRequired,
  getTagBySearch: PropTypes.func.isRequired,
  resetGetTagBySearch: PropTypes.func.isRequired
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
