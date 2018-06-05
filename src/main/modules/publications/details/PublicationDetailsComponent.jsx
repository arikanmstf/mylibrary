import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from 'config';

import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardActions from 'react-toolbox/lib/card/CardActions';
import CardText from 'react-toolbox/lib/card/CardText';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Link from 'react-toolbox/lib/link/Link';
import Table from 'react-toolbox/lib/table/Table';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';
import Button from 'react-toolbox/lib/button/Button';

import ListsOfPublicationEdit from 'common/layout/lists-of-publication/ListsOfPublicationEdit';
import TagsOfPublication from 'common/layout/tags-of-publication/TagsOfPublication';
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
    return publication && (
      <div className="item-details-page">
        <div className="item-details-container">
          <div className="image-container">
            <img
              alt="cover img"
              className="item-image"
              src={`${config.homeUrl}static/img/cover/${publication.publication_id}.jpg`}
            />
          </div>
          <Card className="content-container">
            <CardTitle
              title={this.props.publication.title}
              subtitle={this.props.publication.writers}
            />
            <CardText>
              <div className="item-light-title">
                <span>
                  <Link href={`${config.homeUrl}publishers/${publication.publisher_id}`} label={publication.publisher_name} />
                </span>
              </div>
            </CardText>
            <CardText>{this.props.publication.description}</CardText>
            <CardText><TagsOfPublication tags={publication.tags} /></CardText>
            <CardActions className="item-actions">
              <IconButton icon="add" primary />
              <IconButton icon="favorite" accent />
              { publication.can_download && (publication.file_exists || publication.download_url) ?
                <IconButton
                  icon="file_download"
                  target="_blank"
                  primary
                  href={publication.download_url ?
                  `${publication.download_url}` :
                  `${API.downloadFile}?publication_id=${publication.publication_id}`}
                /> : null }
            </CardActions>
          </Card>
        </div>
        <Table selectable={false} className="table-container">
          { publication.isbn ? <TableRow>
            <TableCell><span>{'ISBN'}</span></TableCell>
            <TableCell><span>{ publication.isbn }</span></TableCell>
          </TableRow> : null }
          <TableRow>
            <TableCell><span>{'Cover No'}</span></TableCell>
            <TableCell><span>{ publication.cover_no }</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><span>{'Page Number'}</span></TableCell>
            <TableCell><span>{ publication.page_number }</span></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><span>{'Added By'}</span></TableCell>
            <TableCell><span>{ publication.added_by }</span></TableCell>
          </TableRow>
        </Table>
        <div className="item-lists">
          <h5>Lists</h5>
          <ListsOfPublicationEdit lists={publication.lists} onListsChange={this.onListsChange} />
        </div>
        <Button onClick={(e) => this.saveForm(e)} label="Save" primary raised />
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
