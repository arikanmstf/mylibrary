import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/Pagination';
import InputSearch from 'common/input/InputSearch';

class AdminListsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }
  componentDidMount() {
    this.props.getAllLists(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllLists({ title: newValue });
  }

  renderList() {
    return this.props.lists.map((list) => {
      return (
        <tr key={list.list_id}>
          <td>{list.list_id}</td>
          <td>{list.title}</td>
          <td>
            <Link to={`${config.homeUrl}admin/lists/edit/${list.list_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/lists/remove/${list.list_id}`}>
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
          <h3>Admin Lists</h3>
          <Pagination
            pageNo={parseInt(this.state.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/lists/pages"
          />
        <Link to={`${config.homeUrl}admin/lists/add`} className="btn btn-success">Add List</Link>
          <InputSearch makeSearch={this.setSearchTitle} />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>List Name</td>
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

AdminListsComponent.propTypes = {
  getAllLists: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminListsComponent.defaultProps = {
  lists: [],
  total: 0
};

export default AdminListsComponent;
