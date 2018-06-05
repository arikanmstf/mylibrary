import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import config from 'config';
import UnorderedList from 'common/layout/UnorderedList';
import Pagination from 'common/layout/pagination/Pagination';

const ListList = styled.li`
border-bottom: 1px solid #666666;
padding: 10px;
background-color: white;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
padding: 8px;
font-size: 16px;
`;

class ListListComponent extends Component {
  componentDidMount() {
    this.props.getAllLists(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
    if (nextProps.title !== this.props.title) {
      this.props.getAllLists(nextProps);
    }
  }

  onLiClick() {
    this.setState(this.props);
  }

  renderList() {
    return this.props.lists.map((list) => {
      return (
        <ListList key={list.list_id}>
          <Link to={`${config.homeUrl}lists/${list.list_id}`} >
            {list.title}
          </Link>
        </ListList>
      );
    });
  }

  render() {
    return (
      <div>
        <Pagination
          pageNo={+this.props.pageNo}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
        <UnorderedList>
          {this.renderList()}
        </UnorderedList>
      </div>
    );
  }
}

ListListComponent.propTypes = {
  getAllLists: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  pageNo: PropTypes.number,
  title: PropTypes.string
};

ListListComponent.defaultProps = {
  lists: [],
  total: 0,
  pageNo: 1,
  title: ''
};

export default ListListComponent;
