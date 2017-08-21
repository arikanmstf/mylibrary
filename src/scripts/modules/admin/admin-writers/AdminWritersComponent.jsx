import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import Pagination from 'modules/common/pagination/Pagination';
import InputSearch from 'modules/common/input-search/InputSearch';

class AdminWritersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      pageNo: this.props.match.params.pageNo || 1
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllWriters(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllWriters({ title: newValue });
  }

  renderList() {
    return this.props.writers.map((writer) => {
      return (
        <tr key={writer.writer_id}>
          <td>{writer.writer_id}</td>
          <td>{writer.full_name}</td>
          <td>
            <Link to={`${config.homeUrl}admin/writers/edit/${writer.writer_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/writers/remove/${writer.writer_id}`}>
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
        <h3>Admin Writers</h3>
        <Pagination
          pageNo={parseInt(this.props.match.params.pageNo, 10) || 1}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/writers/pages"
        />
        <Link to={`${config.homeUrl}admin/writers/add`} className="btn btn-success">Add Writer</Link>
        <InputSearch makeSearch={this.setSearchTitle} />
        <table className="table table-responsive table-bordered table-hover admin-table">
          <thead>
            <tr>
              <td>#</td>
              <td>Writer Name</td>
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

AdminWritersComponent.propTypes = {
  getAllWriters: PropTypes.func.isRequired,
  writers: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminWritersComponent.defaultProps = {
  writers: [],
  total: 0
};

export default AdminWritersComponent;
