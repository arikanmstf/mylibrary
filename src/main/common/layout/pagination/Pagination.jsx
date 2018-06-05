import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-toolbox/lib/link/Link';

import { PAGINATION } from 'common/Config';
import config from 'config';

export default class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  nextPage() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = +this.props.pageNo;

    if (totalPage !== pageNo) {
      return (<Link href={`${config.homeUrl}${this.props.linkTo}/${pageNo + 1}`} onClick={this.props.onLiClick} icon="chevron_right" />);
    }
    return null;
  }
  lastPage() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = +this.props.pageNo;

    if (totalPage !== pageNo) {
      return (<Link href={`${config.homeUrl}${this.props.linkTo}/${totalPage}`} onClick={this.props.onLiClick} icon="last_page" />);
    }
    return null;
  }
  prevPage() {
    const pageNo = +this.props.pageNo;

    if (pageNo > 1) {
      return (<Link href={`${config.homeUrl}${this.props.linkTo}/${pageNo - 1}`} onClick={this.props.onLiClick} icon="chevron_left" />);
    }
    return null;
  }
  firstPage() {
    const pageNo = +this.props.pageNo;

    if (pageNo > 1) {
      return (<Link href={`${config.homeUrl}${this.props.linkTo}/1`} onClick={this.props.onLiClick} icon="first_page" />);
    }
    return null;
  }

  renderLi(index) {
    const pageNo = +this.props.pageNo;
    const i = index + 1;
    let className;
    if (i === pageNo) className = 'active';
    const label = `${i}`;
    return (<Link href={`${config.homeUrl}${this.props.linkTo}/${i}`} className={className} key={i} onClick={this.props.onLiClick} label={label} />);
  }

  render() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    if (totalPage < 2 || !totalPage) return null;
    const pageNo = +this.props.pageNo;
    const result = [];
    if (totalPage > 10) {
      for (let i = pageNo - 3; (i >= pageNo - 3) && (i < pageNo + 2); i++) {
        if (i > -1 && i < totalPage) result.push(this.renderLi(i));
      }
    } else {
      for (let i = 0; i < totalPage; i++) {
        result.push(this.renderLi(i));
      }
    }

    return (
      <ul className="pagination-list">
        <div className="pagination-list-container">
          {this.firstPage()}
          {this.prevPage()}
          {result}
          {this.nextPage()}
          {this.lastPage()}
        </div>
      </ul>
    );
  }
}

Pagination.propTypes = {
  pageNo: PropTypes.number,
  total: PropTypes.number,
  onLiClick: PropTypes.func.isRequired,
  linkTo: PropTypes.string
};

Pagination.defaultProps = {
  pageNo: 0,
  total: 0,
  linkTo: ''
};
