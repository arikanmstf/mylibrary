import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  renderPagination() {
    return (
      <div className="pagination-list-container">
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
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
  publications: PropTypes.arrayOf(Object)
};

PublicationList.defaultProps = {
  search: {},
	publications: []
};

function mapStateToProps(state) {
  // whatever is returned will show up
  // as props inside of BookList
  return {
   publications: state.publications
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
