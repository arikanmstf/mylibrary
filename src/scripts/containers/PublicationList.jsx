import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from '../components/Pagination';

import { getAllPublications } from '../actions/ResolvedGetAllPublications';

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
          pageNo={parseInt(this.props.search.pageNo, 10)}
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
  return {
   publications: state.publications.list,
   total: parseInt(state.publications.total, 10)
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getAllPublications: (search) => dispatch(getAllPublications(search)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
