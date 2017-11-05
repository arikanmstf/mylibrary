import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import config from 'config';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardActions from 'react-toolbox/lib/card/CardActions';
import IconButton from 'react-toolbox/lib/button/IconButton';

const publicationCardStyle = {
  width: '350px',
  maxWidth: '100%'
};

const PublicationCard = (props) => (
  props.publication &&
  (<div className="publication-card" style={{ maxWidth: '100%' }}>
    <Card style={publicationCardStyle}>
      <CardTitle
        title={props.publication.title}
        subtitle={props.publication.writers}
      />
      <Link to={`${config.homeUrl}publications/${props.publication.publication_id}`}>
        <CardMedia
          aspectRatio="wide"
          image={`${config.homeUrl}static/img/cover/${props.publication.publication_id}.jpg`}
        />
      </Link>
      <CardActions>
        <IconButton icon="add" primary />
        <IconButton icon="favorite" accent />
        { props.publication.can_download && (props.publication.file_exists || props.publication.download_url) ?
          <IconButton
            icon="file_download"
            target="_blank"
            primary
            href={props.publication.download_url ?
            `${props.publication.download_url}` :
            `${API.downloadFile}?publication_id=${props.publication.publication_id}`}
          /> : null }
      </CardActions>
    </Card>
  </div>)
);

PublicationCard.propTypes = {
  publication: PropTypes.object.isRequired
};

export default PublicationCard;
