import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPublicationDetails } from '../actions/resolvedGetPublicationDetails';
/*
{"response":{"publication_id":"10","book_id":"10","title":"Kral\u0131n D\u00f6n\u00fc\u015f\u00fc","writers":"J.R.R. Tolkien","description":"\nY\u00fcz\u00fcklerin Efendisi son y\u00fczy\u0131l\u0131n en \u00e7ok okunan y\u00fcz kitab\u0131 aras\u0131nda en ba\u015fta geliyor. T\u00fcrk\u00e7e bas\u0131m\u0131n\u0131n ilk iki kitab\u0131 Y\u00fcz\u00fck Karde\u015fli\u011fi ve \u0130ki Kule, bu ilginin evrenselli\u011fini kan\u0131tlad\u0131. Polisiye ya da bilimkurgu merakl\u0131lar\u0131, \u015fiir, roman ve \u00f6yk\u00fc okurlar\u0131, hep birlikte Frodo, Sam, Merry, Pippin, Aragorn ve Gandalf'\u0131n maceralar\u0131n\u0131 okumaya, 'Orta D\u00fcnya'da ya\u015famaya ba\u015flad\u0131lar.\u00dc\u00e7\u00fcnc\u00fc kitap Kral\u0131n D\u00f6n\u00fc\u015f\u00fc ile birlikte Y\u00fcz\u00fcklerin Efendisi tamamlan\u0131yor: Bu k\u0131s\u0131mda Karanl\u0131klar Efendisi ile Y\u00fcz\u00fck Karde\u015fli\u011fi, iki cephede kar\u015f\u0131 kar\u015f\u0131ya geliyorlar. Frodo ve Sam ellerinde hepsine h\u00fckmedecek Tek Y\u00fcz\u00fck ile Mordor'un i\u00e7ine, karanl\u0131\u011f\u0131n kalbine do\u011fru bir yolculuk yaparken, di\u011ferleri de karanl\u0131\u011fa kar\u015f\u0131 son cephe olan Gondor'da umutsuz bir savunmaya giri\u015fiyorlar...\n","cover_no":"1","language":"tr","page_number":"408","name":"Unknown","publisher_id":"0"},"error":false}
*/
class PublicationDetailsPage extends Component {

	constructor(props) {
    super(props);

    this.state = props;
  }

	componentDidMount() {
		this.props.getPublicationDetails(this.state.publicationId);
	}

	render() {
		let publication = this.props.publication;
		return(
			<div className="publication-details-page">
				<div className="publication-details-container">
					<div className="col-md-6 col-sm-6 publication-info">
						<img
							className="publication-image"
							src={`http://mustafaarikan.net/mylibrary/cover/${publication.publication_id}.jpg`} />
					</div>
					<div className="col-md-6 col-sm-6 publication-info">
						<div className="publication-title">
							<span>{publication.title}</span>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
			)
	}
}

function mapStateToProps(state){
	//whatever is returned will show up
	// as props inside of BookList
	return {
		publication: state.publication
	};
}

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => {
  return { getPublicationDetails: (search) => dispatch(getPublicationDetails(search)) }
}



// Promote BookList from a component to a container - it needs to know
// about this new dispatch method , selectBook
// Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetailsPage);
