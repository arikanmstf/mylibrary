import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from 'config';

import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Table from 'react-toolbox/lib/table/Table';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';

import Pagination from 'common/layout/pagination/Pagination';
import InputSearch from 'common/layout/input-search/InputSearch';

class ItemListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: props.match.params.pageNo || 1,
      title: ''
    };
  }
  componentDidMount() {
    this.props.getAllItems(this.state);
  }

  onLiClick() {
    this.setState({ pageNo: this.props.match.params.pageNo });
  }
  setSearchTitle = (newValue) => {
    this.setState({ title: newValue });
    this.props.getAllItems({ title: newValue });
  }

  renderList() {
    return this.props.items.map((item) => {
      return (
        <TableRow key={item[this.props.item_id]}>
          <TableCell><span>{item[this.props.item_id]}</span></TableCell>
          <TableCell><span>{item.title}</span></TableCell>
          <TableCell>
            <Link href={`${config.homeUrl}admin/${this.props.item_url}/edit/${item[this.props.item_id]}`} icon="edit" />
            <Link href={`${config.homeUrl}admin/${this.props.item_url}/remove/${item[this.props.item_id]}`} icon="delete" />
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Pagination
          pageNo={+this.state.pageNo}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo={`admin/${this.props.item_url}/pages`}
        />
        <Button href={`${config.homeUrl}admin/${this.props.item_url}/add`} label="Add List" icon="add" raised primary />
        <InputSearch makeSearch={this.setSearchTitle} />
        <Table selectable={false}>
          <TableRow>
            <TableCell><span>#</span></TableCell>
            <TableCell><span>List Name</span></TableCell>
            <TableCell><span>Options</span></TableCell>
          </TableRow>
          {this.renderList()}
        </Table>
      </div>
    );
  }
}

ItemListComponent.propTypes = {
  getAllItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  match: PropTypes.object.isRequired,
  item_id: PropTypes.string.isRequired,
  item_url: PropTypes.string.isRequired,
  title: PropTypes.string
};

ItemListComponent.defaultProps = {
  items: [],
  total: 0,
  title: ''
};

export default ItemListComponent;
