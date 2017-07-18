import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGINATION } from 'common/Config';

export default class Pagination extends Component {

  constructor(props) {
		super(props);
		this.state = props;
	}

  nextPage() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = parseInt(this.props.pageNo, 10);

    if (totalPage !== pageNo) {
      return (<Link to={`/${this.props.linkTo}/${pageNo + 1}`} onClick={this.props.onLiClick}>{`>`}</Link>);
    }
    return null;
  }
  lastPage() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = parseInt(this.props.pageNo, 10);

    if (totalPage !== pageNo) {
      return (<Link to={`/${this.props.linkTo}/${totalPage}`} onClick={this.props.onLiClick}>{`>>`}</Link>);
    }
    return null;
  }
  prevPage() {
    const pageNo = parseInt(this.props.pageNo, 10);

    if (pageNo > 1) {
      return (<Link to={`/${this.props.linkTo}/${pageNo - 1}`} onClick={this.props.onLiClick}>{`<`}</Link>);
    }
    return null;
  }
  firstPage() {
    const pageNo = parseInt(this.props.pageNo, 10);

    if (pageNo > 1) {
      return (<Link to={`/${this.props.linkTo}/1`} onClick={this.props.onLiClick}>{`<<`}</Link>);
    }
    return null;
  }

  renderLi(index) {
    const pageNo = parseInt(this.props.pageNo, 10);
    const i = index + 1;
    let className;
    if (i === pageNo) className = 'active';
    return (<Link to={`/${this.props.linkTo}/${i}`} className={className} key={i} onClick={this.props.onLiClick}>{i}</Link>);
  }

  render() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    if (totalPage < 2) return null;
    const pageNo = parseInt(this.props.pageNo, 10);
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
