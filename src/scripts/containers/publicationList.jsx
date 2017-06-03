import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPublications } from '../actions/resolvedGetAllPublications';

class PublicationList extends Component {

	componentDidMount() {
		this.props.getAllPublications();
	}

	renderList() {
		return this.props.publications.map((publication)=> {
			return (
					<li key={ publication.publication_id }>
							<div className="publication-meta">
								<div className="publication-image-mask">
									<img
										className="publication-image"
										src={`http://mustafaarikan.net/mylibrary/cover/${publication.publication_id}.jpg`} />
								</div>
								<div className="publication-info">
										{ publication.writers }
								</div>
							</div>
					</li>
				);
		});
	}

	render() {
		return(
				<ul className="publication-list">
					{ this.renderList() }
				</ul>
			)
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	return {
		publications : state.publications
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getAllPublications: () => dispatch(getAllPublications()) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublicationList);
