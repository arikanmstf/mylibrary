import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'react-toolbox/lib/button/Button';

import config from 'config';
import Pagination from 'modules/common/pagination/Pagination';
import InputSearch from 'modules/common/input-search/InputSearch';

class AdminPublicationsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
    this.setSearchTitle = this.setSearchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllPublications(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle(newValue) {
    this.setState({ title: newValue });
    this.props.getAllPublications({ title: newValue });
  }

  renderList() {
    return this.props.publications.map((publication) => {
      return (
        <tr key={publication.publication_id}>
          <td>{publication.publication_id}</td>
          <td>{publication.title}</td>
          <td>{publication.writers}</td>
          <td>
            <Link to={`${config.homeUrl}admin/publications/edit/${publication.publication_id}`}>
              <i className="glyphicon glyphicon-edit" />
            </Link>
            <Link to={`${config.homeUrl}admin/publications/remove/${publication.publication_id}`}>
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
        <h3>Admin Publications</h3>
        <Pagination
          pageNo={parseInt(this.state.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="admin/publications/pages"
        />
        <Button href={`${config.homeUrl}admin/publications/add`} label="Add Publication" raised primary />
        <InputSearch makeSearch={this.setSearchTitle} />
        <table className="table table-responsive table-bordered table-hover admin-table">
          <thead>
            <tr>
              <td>#</td>
              <td>Publication Name</td>
              <td>Writers</td>
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

AdminPublicationsComponent.propTypes = {
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired
};

AdminPublicationsComponent.defaultProps = {
  publications: [],
  total: 0
};

export default AdminPublicationsComponent;
