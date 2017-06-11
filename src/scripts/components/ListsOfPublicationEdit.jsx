import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getListBySearch, resetGetListBySearch } from '../actions/ResolvedGetListBySearch';

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
  }
  removeList(l) {
    const lists = [];
    for (let i = 0; i < this.state.lists.length; i++) {
      if (this.state.lists[i].list_id !== l.list_id) {
        lists.push(this.state.lists[i]);
      }
    }
    this.setState({ lists });
  }

  renderSearchList() {
    const listSearch = this.props.listSearch;
    return listSearch && (this.props.listSearch.map((list) => {
      return (
        <li key={list.list_id} onClick={() => this.addNewList(list)}>{list.title}</li>
      );
    }));
  }

	renderList() {
		return this.state.lists.map((list) => {
			return (
				<div key={list.list_id}>
					<Link to={`/admin/lists/edit/${list.list_id}`} >
						<span className="list">
								{list.title}
						</span>
					</Link>
          <i onClick={() => this.removeList(list)} className="glyphicon glyphicon-remove" />
				</div>
			);
		});
	}

	render() {
		const lists = this.state.lists;
		return lists ? (
			<div className="lists-of-publication">
						{this.renderList()}
            <input value={this.state.new_list} onChange={this.onNewListChange} />
            <button className="btn btn-primary" onClick={this.searchLists}>Search Lists</button>
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
	lists: PropTypes.arrayOf(Object).isRequired,
  listSearch: PropTypes.arrayOf(Object).isRequired,
  getListBySearch: PropTypes.func.isRequired,
  resetGetListBySearch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	// whatever is returned will show up
	// as props inside of BookList
	return {
		listSearch: state.listSearch
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return {
    getListBySearch: (search) => dispatch(getListBySearch(search)),
    resetGetListBySearch: () => dispatch(resetGetListBySearch())
  };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ListsOfPublicationEdit);
