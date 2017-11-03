import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { commaListItems } from 'common/Helpers';

class WriterDetailsComponent extends Component {

  componentDidMount() {
    this.props.getWriterDetails(this.props.match.params.writerId);
  }

  render() {
    const writer = this.props.writer;
    const writerBirth = (writer.birth_date ? (`Birth: ${writer.birth_date}`) : '');
    const writerDeath = (writer.death_date ? (`, Death: ${writer.death_date}`) : '');
    const writerLife = writerBirth + writerDeath;

    return writer ? (
      <div className="item-details-page writer-details">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-title">
              <span>{writer.full_name}</span>
            </div>
            <div className="item-light-title">
              {writerLife}
            </div>
            <div className="item-light-title">
              <span>{writer.citizenship}</span>
            </div>
            <p className="item-description">
              {writer.description}
            </p>
            <span className="item-light-title">Books of the Writer</span>
            <div className="item-small-title">
              {commaListItems(writer.books, writer.book_ids, 'books')}
            </div>
          </div>
          <div className="clearfix" />
          <div />
        </div>
      </div>
    ) : null;
  }
}
WriterDetailsComponent.propTypes = {
  getWriterDetails: PropTypes.func.isRequired,
  writer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default WriterDetailsComponent;
