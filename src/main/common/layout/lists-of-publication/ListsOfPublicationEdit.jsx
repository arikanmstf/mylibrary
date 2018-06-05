import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';

import InputSearch from 'common/layout/input-search/InputSearch';
import { Table } from 'common/layout';

const DivList = styled.div`
cursor: pointer;
text-decoration: underline;
`;

class ListsOfPublicationEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };

    this.searchLists = this.searchLists.bind(this);
    this.removeList = this.removeList.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      lists: nextProps.lists
    });
  }

  searchLists(newValue) {
    this.props.getListBySearch(newValue);
  }
  addNewList(list) {
    const lists = this.state.lists;
    lists.push(list);
    this.setState({ lists });
    this.props.resetGetListBySearch();
    this.props.onListsChange(lists);
  }
  removeList(l) {
    const lists = this.state.lists.filter((list) => {
      return list.list_id !== l.list_id;
    });
    this.setState({ lists });
    this.props.onListsChange(lists);
  }
  updateOrderNo(event, list) {
    list.order_no = event.target.value; // eslint-disable-line no-param-reassign
  }

  renderSearchList() {
    const lists = this.state.lists;
    const listSearch = this.props.listSearch;

    return listSearch && (listSearch.map((list) => {
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].list_id === list.list_id) return null;
      }
      return (
        <tr key={list.list_id}>
          <td>{list.title}</td>
          <td>
            <input
              type="number"
              placeholder="Order No"
              onChange={(event) => this.updateOrderNo(event, list)}
            />
          </td>
          <td>
            <IconButton
              icon="add"
              onClick={() => this.addNewList(list)}
              accent
            />
          </td>
        </tr>
      );
    }));
  }

  renderList() {
    return this.state.lists.map((list) => {
      return (
        <Button
          onClick={() => this.removeList(list)}
          key={list.list_id}
          label={`${list.title} ${list.order_no || ''}`}
          accent
        />
      );
    });
  }

  render() {
    const lists = this.state.lists;
    return lists ? (
      <div>
        <DivList>{this.renderList()}</DivList>
        <InputSearch makeSearch={this.searchLists} />
        <div>
          <Table>
            <tbody>{this.renderSearchList()}</tbody>
          </Table>
        </div>
      </div>
    ) : null;
  }
}
ListsOfPublicationEdit.propTypes = {
  lists: PropTypes.arrayOf(Object),
  listSearch: PropTypes.arrayOf(Object).isRequired,
  getListBySearch: PropTypes.func.isRequired,
  resetGetListBySearch: PropTypes.func.isRequired,
  onListsChange: PropTypes.func.isRequired
};
ListsOfPublicationEdit.defaultProps = {
  lists: []
};

export default ListsOfPublicationEdit;
