import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { commaListItems } from 'common/Helpers';

class ListDetailsComponent extends Component {

  componentDidMount() {
    this.props.getListDetails(this.props.match.params.listId);
  }

  render() {
    const list = this.props.list;
    return list ? (
      <div className="item-details-page list-details">
        <div className="item-details-container">
          <div className="  item-info">
            <div className="item-title">
              <span>{list.title}</span>
            </div>
            <span className="item-light-title">Books on the List</span>
            <div className="item-small-title">
              {commaListItems(list.publications, list.publication_ids, 'publications')}
            </div>
          </div>
          <div className="clearfix" />
          <div />
        </div>
      </div>
    ) : null;
  }
}
ListDetailsComponent.propTypes = {
  getListDetails: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default ListDetailsComponent;
