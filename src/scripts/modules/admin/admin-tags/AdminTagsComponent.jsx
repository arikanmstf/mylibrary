import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/Pagination';
import InputSearch from 'common/input/InputSearch';

class AdminTagsComponent extends Component {
  constructor(props) {
		super(props);

    this.state = {
      title: '',
      pageNo: this.props.match.params.pageNo || 1
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
	}

	componentDidMount() {
		this.props.getAllTags(this.state);
	}

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllTags({ title: newValue });
  }

  renderList() {
    return this.props.tags.map((tag) => {
      return (
        <tr key={tag.tag_id}>
          <td>{tag.tag_id}</td>
          <td>{tag.title}</td>
          <td>
            <Link to={`${config.homeUrl}admin/tags/edit/${tag.tag_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/tags/remove/${tag.tag_id}`}>
              <i className="glyphicon glyphicon-remove" />
            </Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
          <h3>Admin Tags</h3>
          <Pagination
            pageNo={parseInt(this.state.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/tags/pages"
          />
          <Link to={`${config.homeUrl}admin/tags/add`} className="btn btn-success">Add Tag</Link>
          <InputSearch makeSearch={this.setSearchTitle} />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>Tag Name</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
      </div>
    );
  }
}

AdminTagsComponent.propTypes = {
  getAllTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminTagsComponent.defaultProps = {
	tags: [],
	total: 0
};

export default AdminTagsComponent;
