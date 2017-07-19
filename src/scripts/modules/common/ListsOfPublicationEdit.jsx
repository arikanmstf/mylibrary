import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getListBySearch, resetGetListBySearch } from 'modules/list-details/ListDetailsActions';

class ListsOfPublicationEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      new_list: '',
      lists: []
    };

    this.onNewListChange = this.onNewListChange.bind(this);
    this.searchLists = this.searchLists.bind(this);
    this.removeList = this.removeList.bind(this);
    this.addNewList = this.addNewList.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      lists: (this.state.lists.length > 0) ? this.state.lists : nextProps.lists
    });
  }

  onNewListChange(event) {
    this.setState({
      new_list: event.target.value
    });
  }
  searchLists() {
    this.props.getListBySearch(this.state.new_list);
  }
  addNewList(list) {
    const lists = this.state.lists;
    lists.push(list);
    this.setState({ lists, new_list: '' });
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

  renderSearchList() {
    const lists = this.state.lists;
    const listSearch = this.props.listSearch;

    return listSearch && (listSearch.map((list) => {
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].list_id === list.list_id) return null;
      }
      return (
        <li key={list.list_id} onClick={() => this.addNewList(list)}>{list.title}</li>
      );
    }));
  }

	renderList() {
		return this.state.lists.map((list) => {
			return (
        <span
          onClick={() => this.removeList(list)}
          key={list.list_id}
        >
					{list.title}
          <i className="glyphicon glyphicon-remove" />
        </span>
			);
		});
	}

	render() {
		const lists = this.state.lists;
		return lists ? (
			<div className="lists-of-publication">
              <div className="list-list">{this.renderList()}</div>
              <div className="custom-search-input">
                  <div className="input-group col-md-12">
                      <input
                        value={this.state.new_list}
                        onChange={this.onNewListChange}
                        type="text"
                        className="form-control input-lg"
                        placeholder="Search for lists"
                      />
                      <span className="input-group-btn">
                          <button className="btn btn-lg" type="button" onClick={this.searchLists}>
                              <i className="glyphicon glyphicon-search" />
                          </button>
                      </span>
                  </div>
              </div>
            <div className="item-search-results">
              <ul>
                {this.renderSearchList()}
              </ul>
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

function mapStateToProps(state) {
	return {
		listSearch: state.listSearch
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListBySearch: (search) => dispatch(getListBySearch(search)),
    resetGetListBySearch: () => dispatch(resetGetListBySearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListsOfPublicationEdit);
