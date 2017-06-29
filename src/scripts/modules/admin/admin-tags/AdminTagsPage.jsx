import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pagination from 'modules/common/Pagination';
import InputSearch from 'common/input/InputSearch';
import { getAllTags } from './AdminTagsActions';

class AdminTagsPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;

    this.setSearchTitle = this.setSearchTitle.bind(this);
	}

	componentDidMount() {
		this.props.getAllTags(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
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
            <Link to={`/admin/tags/edit/${tag.tag_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/tags/remove/${tag.tag_id}`}>
              <i className="glyphicon glyphicon-remove" />
            </Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="admin-page col-xs-12 col-sm-9 col-md-9">
          <h3>Admin Tags</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/tags"
          />
          <Link to={`/admin/tags/add`} className="btn btn-success">Add Tag</Link>
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

AdminTagsPage.propTypes = {
  search: PropTypes.object,
  getAllTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminTagsPage.defaultProps = {
  search: {},
	tags: [],
	total: 0
};

function mapStateToProps(state) {
  return {
   tags: state.tags.list,
   total: parseInt(state.tags.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllTags: (search) => dispatch(getAllTags(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTagsPage);
