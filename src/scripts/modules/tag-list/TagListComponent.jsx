import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pagination from 'modules/common/Pagination';

class TagListComponent extends Component {
	componentDidMount() {
		this.props.getAllTags(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
    if (nextProps.title !== this.props.title) {
      this.props.getAllTags(nextProps);
    }
	}

  onLiClick() {
    this.setState(this.props);
  }

	renderList() {
		return this.props.tags.map((tag) => {
			return (
				<li key={tag.tag_id}>
					<div className="tag-meta">
						<div className="tag-info">
							<div className="tag-title">
								<Link to={`/tags/${tag.tag_id}`} >
									{tag.title}
								</Link>
							</div>
						</div>
					</div>
				</li>
			);
		});
	}

	render() {
		return (
      <div>
        <Pagination
          pageNo={parseInt(this.props.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
        <ul className="tag-list">
          {this.renderList()}
        </ul>
      </div>
		);
	}
}

TagListComponent.propTypes = {
  getAllTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  pageNo: PropTypes.number,
  title: PropTypes.string
};

TagListComponent.defaultProps = {
	tags: [],
	total: 0,
	pageNo: 1,
	title: ''
};

export default TagListComponent;
