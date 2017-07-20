import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputSearch from 'common/input/InputSearch';
import Pagination from 'modules/common/Pagination';

class PublicationListComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
      title: ''
    };
    this.searchPublications = this.searchPublications.bind(this);
	}

	componentDidMount() {
		this.props.getAllPublications(this.props);
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
	searchPublications(e) {
		this.setState({ title: e });
		this.props.getAllPublications({ title: e });
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
				<InputSearch makeSearch={this.searchPublications} />
        <Pagination
          pageNo={parseInt(this.props.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
        <ul className="publication-list">
          {this.renderList()}
        </ul>
        <Pagination
          pageNo={parseInt(this.props.pageNo, 10)}
          total={this.props.total}
          onLiClick={this.onLiClick}
          linkTo="pages"
        />
      </div>
		);
	}
}

PublicationListComponent.propTypes = {
  getAllPublications: PropTypes.func.isRequired,
  publications: PropTypes.arrayOf(Object),
  total: PropTypes.number,
  pageNo: PropTypes.number,
  title: PropTypes.string
};

PublicationListComponent.defaultProps = {
	publications: [],
	total: 0,
	pageNo: 1,
	title: ''
};

export default PublicationListComponent;
