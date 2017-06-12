import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllWriters } from '../../actions/ResolvedGetAllWriters';
import Pagination from '../../components/Pagination';
import InputSearch from '../../components/input/InputSearch';

class AdminWritersPage extends Component {
  constructor(props) {
		super(props);
		this.state = props.search;

    this.setSearchTitle = this.setSearchTitle.bind(this);
	}

	componentDidMount() {
		this.props.getAllWriters(this.state);
	}

  componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
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
            <Link to={`/admin/writers/edit/${writer.writer_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`/admin/writers/remove/${writer.writer_id}`}>
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
          <h3>Admin Writers</h3>
          <Pagination
            pageNo={parseInt(this.props.search.pageNo, 10)}
            total={this.props.total}
            onLiClick={this.onLiClick}
            linkTo="admin/writers"
          />
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

AdminWritersPage.propTypes = {
  search: PropTypes.object,
  getAllWriters: PropTypes.func.isRequired,
  writers: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

AdminWritersPage.defaultProps = {
  search: {},
	writers: [],
	total: 0
};

function mapStateToProps(state) {
  return {
   writers: state.writers.list,
   total: parseInt(state.writers.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllWriters: (search) => dispatch(getAllWriters(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWritersPage);
