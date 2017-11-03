import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';

import ListsOfPublicationEdit from 'modules/common/lists-of-publication/ListsOfPublicationEdit';
import TagsOfPublication from 'modules/common/tags-of-publication/TagsOfPublication';
import { commaListItems } from 'common/Helpers';
import { API } from 'common/Config';

class PublicationDetailsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: props.publication.lists
    };
    this.onListsChange = this.onListsChange.bind(this);
  }

  componentDidMount() {
    this.props.getPublicationDetails(this.props.match.params.publicationId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lists: nextProps.publication.lists
    });
  }

  onListsChange(lists) {
    this.setState({ lists });
  }

  saveForm() {
    const form = {
      publication_id: this.props.match.params.publicationId,
      lists: this.state.lists
    };
    this.props.updatePublicationDetailsList(form);
  }

  render() {
    const publication = this.props.publication;
    const linkStyle = { color: '#AAAAAA' };
    return publication && (
      <div className="item-details-page publication-details">
        <div className="item-details-container">
          <div className="  item-info image-container">
            <img
              alt="cover img"
              className="item-image"
              src={`${config.homeUrl}static/img/cover/${publication.publication_id}.jpg`}
            />
          </div>
          <div className="  item-info content-container">
            <div className="item-title">
              <span>{ publication.title }</span>
            </div>
            <div className="item-small-title">
              { commaListItems(publication.writers, publication.writer_ids, 'writers') }
            </div>
            <div className="item-light-title">
              <span><Link style={linkStyle} to={`${config.homeUrl}publishers/${publication.publisher_id}`}>{publication.publisher_name}</Link></span>
            </div>
            <p className="item-description">
              { publication.description }
            </p>
            <div className="item-buttons">
              { publication.can_download && (publication.file_exists || publication.download_url) ?
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={publication.download_url ?
                  `${publication.download_url}` :
                  `${API.downloadFile}?publication_id=${publication.publication_id}`}
                >
                  <span>Download</span>
                  <i className="glyphicon glyphicon-download-alt" />
                </a> : null }
            </div>
            <div className="item-table">
              <table className="table table-responsive table-hover">
                <tbody>
                  { publication.isbn ? <tr>
                    <td>{'ISBN'}</td>
                    <td>{ publication.isbn }</td>
                  </tr> : null }
                  <tr>
                    <td>{'Cover No'}</td>
                    <td>{ publication.cover_no }</td>
                  </tr>
                  <tr>
                    <td>{'Page Number'}</td>
                    <td>{ publication.page_number }</td>
                  </tr>
                  <tr>
                    <td>{'Added By'}</td>
                    <td>{ publication.added_by }</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-lists-container">
              <div className="item-lists">
                <h5>Lists</h5>
                <ListsOfPublicationEdit lists={publication.lists} onListsChange={this.onListsChange} />
              </div>
            </div>
            <div className="item-lists-container">
              <div className="item-lists">
                <h5>Tags</h5>
                <TagsOfPublication tags={publication.tags} />
              </div>
            </div>
            <button className="btn btn-primary" onClick={(e) => this.saveForm(e)}>Save</button>
          </div>
          <div className="clearfix" />
          <div />
        </div>
      </div>
    );
  }
}
PublicationDetailsComponent.propTypes = {
  getPublicationDetails: PropTypes.func.isRequired,
  updatePublicationDetailsList: PropTypes.func.isRequired,
  publication: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default PublicationDetailsComponent;
