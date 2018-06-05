import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PublicationCard from 'common/layout/publication-card/PublicationCard';
import InputSearch from 'common/layout/input-search/InputSearch';
import Pagination from 'common/layout/pagination/Pagination';

const ListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0;
`;

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
        <PublicationCard
          key={publication.publication_id}
          publication={publication}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <InputSearch makeSearch={this.searchPublications} />
        <Pagination
          pageNo={+this.props.pageNo}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
        <ListWrapper>{this.renderList()}</ListWrapper>
        <Pagination
          pageNo={+this.props.pageNo}
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
