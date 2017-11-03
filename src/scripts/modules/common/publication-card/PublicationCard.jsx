import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import config from 'config';
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card';
import IconButton from 'react-toolbox/lib/button/IconButton';

const publicationCardStyle = {
  width: '350px',
  maxWidth: '100%'
};

const PublicationCard = (props) => (
  <div className="publication-card" style={{ maxWidth: '100%' }}>
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
      </CardActions>
    </Card>
  </div>
);

PublicationCard.propTypes = {
  publication: PropTypes.object.isRequired
};

export default PublicationCard;
