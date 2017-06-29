import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pagination from 'modules/common/Pagination';
import { getAllPublications } from './PublicationListActions';

class PublicationList extends Component {

  constructor(props) {
		super(props);
		this.state = props;
	}

	componentDidMount() {
		this.props.getAllPublications(this.state);
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

	render() {
		return (
      <div>
        <Pagination
          pageNo={parseInt(this.props.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
        <ul className="publication-list">
          {this.renderList()}
        </ul>
      </div>
		);
	}
}

PublicationList.propTypes = {
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  pageNo: PropTypes.number,
  title: PropTypes.string
};

PublicationList.defaultProps = {
	publications: [],
	total: 0,
	pageNo: 1,
	title: ''
};

function mapStateToProps(state) {
  return {
   publications: state.publications.list,
   total: parseInt(state.publications.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
