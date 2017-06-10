import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGINATION } from '../common/config';

import { getAllPublications } from '../actions/resolvedGetAllPublications';

class PublicationList extends Component {

  constructor(props) {
		super(props);
		this.state = props.search;
	}

	componentDidMount() {
		this.props.getAllPublications(this.state);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps.search);
	}

  onLiClick() {
    this.setState(this.props.search);
  }

  nextPage() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = parseInt(this.props.search.pageNo, 10);

    if (totalPage !== pageNo) {
      return (<Link to={`/pages/${pageNo + 1}`} onClick={this.onLiClick}>{`>`}</Link>);
    }
    return null;
  }
  lastPage() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = parseInt(this.props.search.pageNo, 10);

    if (totalPage !== pageNo) {
      return (<Link to={`/pages/${totalPage}`} onClick={this.onLiClick}>{`>>`}</Link>);
    }
    return null;
  }
  prevPage() {
    const pageNo = parseInt(this.props.search.pageNo, 10);

    if (pageNo > 1) {
      return (<Link to={`/pages/${pageNo - 1}`} onClick={this.onLiClick}>{`<`}</Link>);
    }
    return null;
  }
  firstPage() {
    const pageNo = parseInt(this.props.search.pageNo, 10);

    if (pageNo > 1) {
      return (<Link to={`/pages/1`} onClick={this.onLiClick}>{`<<`}</Link>);
    }
    return null;
  }

	renderList() {
		return this.props.publications.map((publication) => {
			return (
				<li key={publication.publication_id}>
					<div className="publication-meta">
						<div className="publication-image-mask">
							<Link to={`/publications/${publication.publication_id}`}>
								<img
									className="publication-image"
									src={`/assets/img/cover/${publication.publication_id}.jpg`}
								/>
							</Link>
						</div>
						<div className="publication-info">
							<div className="publication-title">
								<Link to={`/publications/${publication.publication_id}`} >
									{publication.title}
								</Link>
							</div>
							<div className="publication-writers">
								{publication.writers}
							</div>
						</div>
					</div>
				</li>
			);
		});
	}

  renderLi(index) {
    const pageNo = parseInt(this.props.search.pageNo, 10);
    const i = index + 1;
    let className;
    if (i === pageNo) className = 'active';
    return (<Link to={`/pages/${i}`} className={className} key={i} onClick={this.onLiClick}>{i}</Link>);
  }

  renderPagination() {
    const recordsPerPage = PAGINATION.recordsPerPage;
    const totalPage = parseInt(this.props.total / recordsPerPage, 10) + 1;
    const pageNo = parseInt(this.props.search.pageNo, 10);
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
      <div className="pagination-list-container">
        {this.firstPage()}
        {this.prevPage()}
        {result}
        {this.nextPage()}
        {this.lastPage()}
      </div>
    );
  }

	render() {
		return (
      <div>
        <ul className="pagination-list">
          {this.renderPagination()}
        </ul>
        <ul className="publication-list">
          {this.renderList()}
        </ul>
      </div>
		);
	}
}

PublicationList.propTypes = {
  search: PropTypes.object,
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number
};

PublicationList.defaultProps = {
  search: {},
	publications: [],
	total: 0
};

function mapStateToProps(state) {
  // whatever is returned will show up
  // as props inside of BookList
  return {
   publications: state.publications.list,
   total: parseInt(state.publications.total, 10)
  };
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
