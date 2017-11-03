import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card';
import IconButton from 'react-toolbox/lib/button/IconButton';

import PropTypes from 'prop-types';
import config from 'config';

import InputSearch from 'modules/common/input-search/InputSearch';
import Pagination from 'modules/common/pagination/Pagination';

const publicationCardStyle = {
  width: '350px'
};

class PublicationListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.searchPublications = this.searchPublications.bind(this);
  }

  componentDidMount() {
    this.props.getAllPublications(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
    if (nextProps.title !== this.props.title) {
      this.props.getAllPublications(nextProps);
    }
  }

  onLiClick() {
    this.setState(this.props);
  }
  searchPublications(e) {
    this.setState({ title: e });
    this.props.getAllPublications({ title: e });
  }

  renderList() {
    return this.props.publications.map((publication) => {
      return (
        <li key={publication.publication_id}>
          <Card style={publicationCardStyle}>
            <CardTitle
              title={publication.title}
              subtitle={publication.writers}
            />
            <Link to={`${config.homeUrl}publications/${publication.publication_id}`}>
              <CardMedia
                aspectRatio="wide"
                image={`${config.homeUrl}static/img/cover/${publication.publication_id}.jpg`}
              />
            </Link>
            <CardActions>
              <IconButton icon="add" primary />
              <IconButton icon="favorite" accent />
            </CardActions>
          </Card>
        </li>);
    });
  }

  renderLists() {
    return this.props.publications.map((publication) => {
      return (
        <li key={publication.publication_id}>
          <div className="publication-meta">
            <div className="publication-image-mask">
              <Link to={`${config.homeUrl}publications/${publication.publication_id}`}>
                <img
                  alt="cover img"
                  className="publication-image"
                  src={`${config.homeUrl}static/img/cover/${publication.publication_id}.jpg`}
                />
              </Link>
            </div>
            <div className="publication-info">
              <div className="publication-title">
                <Link to={`${config.homeUrl}publications/${publication.publication_id}`} >
                  {publication.title}
                </Link>
              </div>
              <div className="publication-writers">
                {publication.writers}
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
        <InputSearch makeSearch={this.searchPublications} />
        <Pagination
          pageNo={parseInt(this.props.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
        <div className="publication-list">{this.renderList()}</div>
        <Pagination
          pageNo={parseInt(this.props.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
      </div>
    );
  }
}

PublicationListComponent.propTypes = {
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  pageNo: PropTypes.number,
  title: PropTypes.string
};

PublicationListComponent.defaultProps = {
  publications: [],
  total: 0,
  pageNo: 1,
  title: ''
};

export default PublicationListComponent;
