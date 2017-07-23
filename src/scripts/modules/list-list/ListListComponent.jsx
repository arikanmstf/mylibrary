import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/Pagination';

class ListListComponent extends Component {
	componentDidMount() {
		this.props.getAllLists(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
    if (nextProps.title !== this.props.title) {
      this.props.getAllLists(nextProps);
    }
	}

  onLiClick() {
    this.setState(this.props);
  }

	renderList() {
		return this.props.lists.map((list) => {
			return (
				<li key={list.list_id}>
					<div className="list-meta">
						<div className="list-info">
							<div className="list-title">
								<Link to={`${config.homeUrl}lists/${list.list_id}`} >
									{list.title}
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
        <ul className="item-details-page list-list">
          {this.renderList()}
        </ul>
      </div>
		);
	}
}

ListListComponent.propTypes = {
  getAllLists: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  pageNo: PropTypes.number,
  title: PropTypes.string
};

ListListComponent.defaultProps = {
	lists: [],
	total: 0,
	pageNo: 1,
	title: ''
};

export default ListListComponent;
