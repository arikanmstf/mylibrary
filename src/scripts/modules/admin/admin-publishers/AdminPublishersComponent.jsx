import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/Pagination';
import InputSearch from 'common/input/InputSearch';

class AdminPublishersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllPublishers(this.state);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.search);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllPublishers({ title: newValue });
  }

  renderList() {
    return this.props.publishers.map((publisher) => {
      return (
        <tr key={publisher.publisher_id}>
          <td>{publisher.publisher_id}</td>
          <td>{publisher.name}</td>
          <td>
            <Link to={`${config.homeUrl}admin/publishers/edit/${publisher.publisher_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/publishers/remove/${publisher.publisher_id}`}>
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
          <h3>Admin Publishers</h3>
          <Pagination
            pageNo={parseInt(this.props.match.params.pageNo, 10) || 1}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/publishers/pages"
          />
          <Link to={`${config.homeUrl}admin/publishers/add`} className="btn btn-success">Add Publisher</Link>
          <InputSearch makeSearch={this.setSearchTitle} />
          <table className="table table-responsive table-bordered table-hover admin-table">
            <thead>
              <tr>
                <td>#</td>
                <td>Publisher Name</td>
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

AdminPublishersComponent.propTypes = {
  search: PropTypes.object,
  getAllPublishers: PropTypes.func.isRequired,
  publishers: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminPublishersComponent.defaultProps = {
  search: {},
  publishers: [],
  total: 0
};

export default AdminPublishersComponent;
