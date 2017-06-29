import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pagination from 'modules/common/Pagination';
import InputSearch from 'common/input/InputSearch';
import { getAllLists } from './AdminListsActions';

class AdminListsPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;

    this.setSearchTitle = this.setSearchTitle.bind(this);
	}

	componentDidMount() {
		this.props.getAllLists(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
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
            <Link to={`/admin/lists/edit/${list.list_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/lists/remove/${list.list_id}`}>
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
          <h3>Admin Lists</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/lists"
          />
        <Link to={`/admin/lists/add`} className="btn btn-success">Add List</Link>
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

AdminListsPage.propTypes = {
  search: PropTypes.object,
  getAllLists: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminListsPage.defaultProps = {
  search: {},
	lists: [],
	total: 0
};

function mapStateToProps(state) {
  return {
   lists: state.lists.list,
   total: parseInt(state.lists.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllLists: (search) => dispatch(getAllLists(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminListsPage);
